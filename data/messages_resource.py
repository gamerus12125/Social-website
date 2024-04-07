from flask_restful import Resource, abort
from flask import jsonify, request
from . import db_session
from .messages import Message
from .users import User
from .chats import Chat
from .participants import Participant
from .message_parser import parser
from tools.misc import get_user_token
import jwt


class MessagesListResource(Resource):
    def get(self):
        req = request.args
        chat_id = req.get("chat_id")
        print(chat_id)
        if chat_id:
            db_sess = db_session.create_session()
            chat = db_sess.query(Chat).filter(Chat.id == chat_id).first()
            if chat:
                d_token = get_user_token()
                if d_token:
                    pars = db_sess.query(Participant).filter(
                        (Participant.chat_id == chat_id) & (Participant.user_id == d_token["user"]["id"])).first()
                    if pars:
                        messages = db_sess.query(Message).filter(Message.chat_id == chat_id).all()
                        print(db_sess.query(Message).first().to_dict())
                        messages = [i.to_dict() for i in messages]
                        return jsonify(messages)
        abort(401, message="Bad request")

    def post(self):
        d_token = get_user_token()
        if d_token:
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
        abort(400, message="Bad request")
