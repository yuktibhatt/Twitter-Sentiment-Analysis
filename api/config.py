from dotenv import load_dotenv
import os
load_dotenv()
class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://postgres:1234@localhost/twitterSentiment'

    SESSION_TYPE = "filesystem"
    SESSION_PERMANENT = False
    SESSION_USE_SINGER = True