from flask_restful import reqparse
parser = reqparse.RequestParser()
parser.add_argument("name", required=True, location="form")
parser.add_argument("email", required=True, location="form")
parser.add_argument("password", required=True, location="form")
parser.add_argument("password_again", required=True, location="form")