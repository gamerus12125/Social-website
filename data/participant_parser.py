from flask_restful import reqparse
parser = reqparse.RequestParser()
parser.add_argument("user_id", required=True)
parser.add_argument("chat_id", required=True)