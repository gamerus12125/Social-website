import jwt
from dotenv import load_dotenv
import os
from flask import request, abort



def generate_session_token(user):
    load_dotenv()
    return jwt.encode({"user": {"id": user.id}}, os.environ["JWT_SECRET"], algorithm="HS256")

def check_session_token(token):
    return jwt.decode(token, os.environ["JWT_SECRET"], algorithms="HS256")

def get_user_token():
    req = request.headers
    index = req.get("Cookie").find("session=")
    if index != -1:
        token = req.get("Cookie")[index + 8:]
        try:
            d_token = check_session_token(token)
            return d_token
        except:
            abort(401, message="Bad request")
    return False