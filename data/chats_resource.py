from flask_restful import Resource, abort
from flask import jsonify, request
from . import db_session
from .chats import Chat
from .messages import Message
from tools.misc import get_user_token
from .participants import Participant
from sqlalchemy import select

IMG_URL = "https://philarmonia43.ru/content/img/all/events/909-q5l.jpg"



def check_user_in_chat(chat_id):
    d_token = get_user_token()
    if d_token:
        db_sess = db_session.create_session()
        pp = select(Participant.chat_id).where(Participant.user_id == d_token["user"]["id"]).where(Participant.chat_id == chat_id)
        n = db_sess.execute(pp).fetchall()
        if len(n):
            return True
    return False


class ChatsResource(Resource):
    def get(self, chat_id):
        if check_user_in_chat(chat_id):
            db_sess = db_session.create_session()
            chat = db_sess.query(Chat).get(chat_id)
            return jsonify(chat.to_dict())
        abort(400, message="Bad request")
            

    def delete(self, chat_id):
        if check_user_in_chat(chat_id):
            db_sess = db_session.create_session()
            chat = db_sess.query(Chat).get(chat_id)
            db_sess.delete(chat)
            db_sess.query(Message).filter(Message.chat_id == chat_id).delete()
            db_sess.query(Participant).filter(Participant.chat_id == chat_id).delete()
            db_sess.commit()
            return jsonify({"message": "success"})
        abort(400, message="Bad request")


class ChatsListResource(Resource):
    def get(self):
        d_token = get_user_token()
        if d_token:
            db_sess = db_session.create_session()
            pp = select(Participant.chat_id).where(Participant.user_id == d_token["user"]["id"])
            n = db_sess.execute(pp).fetchall()
            if len(n):
                n = [i[0] for i in n]
                chats = db_sess.query(Chat).filter(Chat.id.in_(n)).all()
                chats = [i.to_dict() for i in chats]
                return jsonify(chats)
            else:
                return jsonify([])
        abort(401, message="Bad request")


    def post(self):
        d_token = get_user_token()
        if d_token:
            db_sess = db_session.create_session()
            db_sess.add(Chat(icon=IMG_URL))
            db_sess.commit()
            id = db_sess.query(Chat).all()[-1].id
            db_sess.add(Participant(chat_id=id, user_id=d_token["user"]["id"]))
            db_sess.commit()
            return jsonify({"message": "success"})
        abort(400, message="Bad request")
