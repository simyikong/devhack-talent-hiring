from flask import Flask
from flask_pymongo import PyMongo
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb+srv://simyi:JiayouJiayou@devhackcluster.cnx3hy1.mongodb.net/mongodb-devhack?retryWrites=true&w=majority"
# mongo = PyMongo(app)

# from flask import Flask
# from pymongo import MongoClient

# app = Flask(__name__)
# client = MongoClient("mongodb+srv://simyi:JiayouJiayou@devhackcluster.cnx3hy1.mongodb.net/mongodb-devhack?retryWrites=true&w=majority")
# db = client.get_database('mongodb-devhack')

from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient("mongodb://localhost:27017/")
db = client['mongodb-devhack']

# mongodb database
# client = PyMongo(app)
# db = client.db

from application import routes