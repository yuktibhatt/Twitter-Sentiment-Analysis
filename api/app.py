from flask import Flask
#from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password:1234@localhost/twitterSentiment'
#db = SQLAlchemy(app)


@app.route('/', methods=['GET'])
def index():
    return {
        'name' : 'Hello World'
    }

if __name__ == 'main':
    app.run(debug=True)


