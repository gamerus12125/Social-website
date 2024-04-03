from flask_restful import Resource, abort
from flask import jsonify, make_response, request
from . import db_session
from .messages import Message
from .users import User
from .chats import Chat
from .participants import Participant
from .message_parser import parser
from tools.misc import check_session_token
import jwt

class MessagesListResource(Resource):
    def get(self):
        req = request.args
        id = req.get("chat_id")
        if id:
            db_sess = db_session.create_session() 
            chat = db_sess.query(Chat).filter(Chat.id == id).first()
            if chat:
                req = request.headers
                index = req.get("Cookie").find("session=")
                if index != -1:
                    token = req.get("Cookie")[index + 8:]
                    try:
                        d_token = check_session_token(token)
                    except:
                        abort(401, message="Bad request")
                    pars = db_sess.query(Participant).filter((Participant.chat_id == id) & (Participant.user_id == d_token["user"]["id"])).first()
                    if pars:
                        messages = db_sess.query(Message).filter(Message.chat_id == id).all()
                        print(db_sess.query(Message).first().to_dict())
                        messages = [i.to_dict() for i in messages]
                        return jsonify(messages)
    
    def post(self):
        req = request.headers
        index = req.get("Cookie").find("session=")
        if index != -1:
            token = req.get("Cookie")[index + 8:]
            try:
                d_token = check_session_token(token)
                args = parser.parse_args()
                db_sess = db_session.create_session()
                author = db_sess.query(User).filter(User.id == d_token["user"]["id"]).first()
                message = Message(
                    text=args["message"],
                    author=author.name,
                    author_id=d_token["user"]["id"],
                    chat_id=args["chat_id"]
                )
                db_sess.add(message)
                db_sess.commit()
                return jsonify({"message": "success"})
            
            except jwt.ExpiredSignatureError:
                abort(401, message="Bad request")
            except jwt.InvalidTokenError:
                abort(401, message="Bad request")
            except:
                abort(401, message="Bad request")
        else:
            abort(400, message="Bad request")