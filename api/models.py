from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
from app import db

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    fullname = db.Column(db.String(345))
    email = db.Column(db.String(345), unique=True)
    password = db.Column(db.Text, nullable=False)
    confirm_password = db.Column(db.Text, nullable=False)
