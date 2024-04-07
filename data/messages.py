import sqlalchemy
from .db_session import SqlAlchemyBase
from sqlalchemy_serializer import SerializerMixin


class Message(SqlAlchemyBase, SerializerMixin):
    __tablename__ = "messages"

    id = sqlalchemy.Column(sqlalchemy.Integer,
                           primary_key=True, autoincrement=True)
    text = sqlalchemy.Column(sqlalchemy.String)
    author = sqlalchemy.Column(sqlalchemy.String)
    author_id = sqlalchemy.Column(sqlalchemy.Integer)
    chat_id = sqlalchemy.Column(sqlalchemy.Integer, sqlalchemy.ForeignKey("chats.id"))