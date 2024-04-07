from flask_restful import Resource, abort
from flask import jsonify, make_response
from . import db_session
from .users import User
from .user_parser import parser
from tools.misc import generate_session_token

def abort_if_user_not_found(user_id):
    session = db_session.create_session()
    user = session.query(User).get(user_id)
    if not user:
        abort(404, message=f"User {user_id} not found")



class UsersResource(Resource):
    def get(self, user_id):
        abort_if_user_not_found(user_id)
        session = db_session.create_session()
        user = session.query(User).get(user_id)
        return jsonify({'user': user.to_dict(only=("name", "email"))})

    def delete(self, user_id):
        abort_if_user_not_found(user_id)
        session = db_session.create_session()
        user = session.query(User).get(user_id)
        session.delete(user)
        session.commit()
        return jsonify({"message": "success"})




class UsersListResource(Resource):
    def get(self):
        session = db_session.create_session()
        users = session.query(User).all()
        return jsonify({"users": [item.to_dict(only=("name", "email")) for item in users]})

    def post(self):
        args = parser.parse_args()
        if args["password"] != args["password_again"]:
            abort(400, message="Bad request")
        session = db_session.create_session()
        if session.query(User).filter(User.email == args["email"]).first():
            abort(400, message="Duplicated user")
        user = User(
            name=args["name"],
            email=args["email"]
        )
        user.set_password(args["password"])
        session.add(user)
        session.commit()

        res = make_response({"message": "success"}, 200)
        res.set_cookie("session", generate_session_token(user))
        return res
