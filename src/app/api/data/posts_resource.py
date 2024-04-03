from flask_restful import Resource, abort
from flask import jsonify, make_response
from . import db_session
from .posts import Post
from .users import User
from .post_parser import parser

class PostResource(Resource):
    def get(self, post_id):
        session = db_session.create_session()
        post = session.query(Post).get(post_id)
        if post:
            return jsonify({"post": post.to_dict()})
        else:
            abort(404, message="Post not found")
    def delete(self, post_id):
        session = db_session.create_session()
        post = session.query(Post).get(post_id)
        if post:
            session.delete(post)
            session.commit()
            return jsonify({"success": "OK"})
        else:
            abort(404, message="Post not found")


class PostListResource(Resource):
    def get(self):
        session = db_session.create_session()
        posts = session.query(Post).all()
        return jsonify([i.to_dict() for i in posts])
    
    def post(self):
        args = parser.parse_args()
        print(args)
        if args["title"] and args["description"] and args["author_id"]:
            session = db_session.create_session()
            author = session.query(User).get(args["author_id"])
            if author:
                post = Post(
                    title=args["title"],
                    description=args["description"],
                    author=author.name,
                    author_id=args["author_id"]
                )
                session.add(post)
                session.commit()
                return make_response({"message": "success"}, 200)
        return abort(400, message="Bad request")