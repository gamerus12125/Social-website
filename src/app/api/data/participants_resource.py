from flask_restful import Resource
from flask import jsonify
from . import db_session
from .participants import Participant
from .participant_parser import parser

IMG_URL = "https://philarmonia43.ru/content/img/all/events/909-q5l.jpg"


class ParticipantResource(Resource):
    def get(self, participant_id):
        db_sess = db_session.create_session()
        participant = db_sess.query(Participant).filter(Participant.id == participant_id).first()
        return jsonify(participant.to_dict())


class ParticipantListResource(Resource):
    def get(self):
        db_sess = db_session.create_session()
        participants = [i.to_dict() for i in db_sess.query(Participant).all()]
        return jsonify(participants)

    def post(self):
        data = parser.parse_args()
        db_sess = db_session.create_session()
        db_sess.add(Participant(user_id=data["user_id"], chat_id=data["chat_id"]))
        db_sess.commit()
        return jsonify({"message": "success"})
