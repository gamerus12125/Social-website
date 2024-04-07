from flask import Flask, request, make_response, jsonify, redirect, render_template
from flask_restful import Api
from data import users_resourse, posts_resource, messages_resource, chats_resource, participants_resource
from data import db_session
from data.users import User
from tools.misc import generate_session_token

app = Flask(__name__)
api = Api(app)

api.add_resource(users_resourse.UsersResource, '/api/users/<int:user_id>')
api.add_resource(users_resourse.UsersListResource, "/api/users")
api.add_resource(posts_resource.PostResource, "/api/posts/<int:post_id>")
api.add_resource(posts_resource.PostListResource, "/api/posts")
api.add_resource(messages_resource.MessagesListResource, "/api/messages")
api.add_resource(chats_resource.ChatsListResource, "/api/chats")
api.add_resource(chats_resource.ChatsResource, "/api/chats/<int:chat_id>")
api.add_resource(participants_resource.ParticipantListResource, "/api/participants")


@app.route("/api/login", methods=["POST"])
def login():
    form = request.form.to_dict()
    if not form:
        return jsonify({"message": "form error"}), 400
    db_sess = db_session.create_session()
    user = db_sess.query(User).filter(User.email == form["email"]).first()
    if not (user and user.check_password(form["password"])):
        return jsonify({"message": "Incorrect email or password"}), 400
    res = make_response({"message": "success"}, 200)
    res.set_cookie("session", generate_session_token(user), max_age=60*60*24*7)
    return res


@app.route("/api/logout")
def logout():
    res = make_response(redirect("http://localhost:5000"), 302)
    res.set_cookie("session", "", expires=0)
    return res


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/login")
def login_page():
    return render_template("login.html")


@app.route("/posts")
def posts():
    return render_template("posts.html")


@app.route("/chat")
def chat():
    return render_template("chat.html")


@app.route("/register")
def register():
    return render_template("register.html")


@app.route("/profile")
def profile():
    return render_template("profile.html")


def main():
    db_session.global_init("db/blogs.db")
    app.run(port=5000, host='127.0.0.1')


if __name__ == '__main__':
    main()
