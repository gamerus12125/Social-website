import jwt
from dotenv import load_dotenv
import os



def generate_session_token(user):
    load_dotenv()
    return jwt.encode({"user": {"id": user.id}}, os.environ["JWT_SECRET"], algorithm="HS256")

def check_session_token(token):
    return jwt.decode(token, os.environ["JWT_SECRET"], algorithms="HS256")