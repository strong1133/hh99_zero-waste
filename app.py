from flask import Flask, render_template
from pymongo import MongoClient
import jwt

app = Flask(__name__)
client = MongoClient('localhost', 27017)
db = client.dbhh99


######### HTML RENDER ############
##################################
@app.route('/')
def home():
    articles = list(db.db_zerowaste.find({}, {'_id': False}))
    return render_template('index.html', articles=articles)


@app.route('/register')
def register():
    return render_template('register.html')


@app.route('/login')
def login():
    return render_template('login.html')


######### 로그인 ############
##################################
if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
