import sqlalchemy
from .db_session import SqlAlchemyBase
from sqlalchemy_serializer import SerializerMixin


class Chat(SqlAlchemyBase, SerializerMixin):
    __tablename__ = "chats"

    id = sqlalchemy.Column(sqlalchemy.Integer,
                           primary_key=True, autoincrement=True)
    icon = sqlalchemy.Column(sqlalchemy.String)