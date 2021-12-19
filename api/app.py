from flask import Flask, request, jsonify, session
from config import ApplicationConfig
from flask_session import Session
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4
# from models import db,User


app = Flask(__name__)
app.config.from_object(ApplicationConfig)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password:1234@localhost/twitterSentiment'

bcrypt = Bcrypt(app)
# CORS(app, supports_credentials=True)
server_session = Session(app)

db = SQLAlchemy(app)
from models import *


@app.route('/me', methods=['GET'])
def get_current_user():
    user_id = session.get("user_id")
    
    if not user_id:
        return jsonify({
            "error": "Unauthorized"
        }), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    })

@app.route('/register', methods=['POST'])
def register_user():
    fullname = request.json["fullname"]
    email = request.json["email"]
    password = request.json["password"]
    confirm_password = request.json["confirm_password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({
            "error":"User already exits"
        }), 409
    
    if password != confirm_password:
        return jsonify({
            "error":"Password should be same"
        })

    hashed_pw = bcrypt.generate_password_hash(password).decode('utf8')
    new_user = User(fullname=fullname, email=email, password=hashed_pw, confirm_password=hashed_pw)
    db.session.add(new_user)
    db.session.commit()

    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    })

@app.route('/login', methods=['POST'])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()
    print('--------------')
    print(user.password)

    if user is None:
        return jsonify({
            "error": "Unauthorized"
        }), 401
    
    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({
            "error": "Unauthorized"
        }), 401

    session["user_id"] = user.id
    
    return jsonify({
        "id": user.id,
        "email": user.email
    })


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)


