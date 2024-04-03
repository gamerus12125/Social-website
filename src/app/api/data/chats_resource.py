from flask_restful import Resource, abort
from flask import jsonify, make_response, request
from . import db_session
from .chats import Chat
from .messages import Message
from tools.misc import check_session_token
import jwt
from .participants import Participant
from sqlalchemy import select, text

IMG_URL = "https://philarmonia43.ru/content/img/all/events/909-q5l.jpg"

class ChatsListResource(Resource):
    def get(self):
        req = request.headers
        index = req.get("Cookie").find("session=")
        if index != -1:
            token = req.get("Cookie")[index + 8:]
            try:
                d_token = check_session_token(token)
                db_sess = db_session.create_session()
                pp = select(Participant.chat_id).where(Participant.user_id == d_token["user"]["id"])
                n = db_sess.execute(pp).fetchall()
                if len(n):
                    print(len(n))
                    n = [i[0] for i in n]
                    chats = db_sess.query(Chat).filter(Chat.id.in_(n)).all()
                    chats = [i.to_dict() for i in chats]
                    return jsonify(chats)
                else:
                    return jsonify([])
            except jwt.ExpiredSignatureError:
                abort(401, message="Bad request")
            except jwt.InvalidTokenError:
                abort(401, message="Bad request")
        else:
            abort(400, message="Bad request")

        return make_response({"message": "success"}, 200)
    
    def post(self):
        req = request.headers
        index = req.get("Cookie").find("session=")
        if index != -1:
            token = req.get("Cookie")[index + 8:]
            try:
                d_token = check_session_token(token)
                db_sess = db_session.create_session()
                db_sess.add(Chat(icon=IMG_URL))
                db_sess.commit()
                id = db_sess.query(Chat).all()[-1].id
                db_sess.add(Participant(chat_id=id, user_id=d_token["user"]["id"]))
                db_sess.commit()
                return jsonify({"message": "success"})
            except jwt.ExpiredSignatureError:
                abort(401, message="Bad request")
            except jwt.InvalidTokenError:
                abort(401, message="Bad request")
        else:
            abort(400, message="Bad request")

        return make_response({"message": "success"}, 200)