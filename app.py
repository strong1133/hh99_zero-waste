import requests
from flask import Flask, render_template
from bs4 import BeautifulSoup
from pymongo import MongoClient
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('localhost', 27017)
db = client.dbhh99


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


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
