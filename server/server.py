from flask import Flask, jsonify, request
from pymongo import MongoClient
import os
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type' 

connection_string = os.environ.get('CONNECTION_STRING')

client = MongoClient(connection_string)

@app.route('/', methods = ['POST']) 
@cross_origin()
def home():
    try:
        data = request.get_json() 
        client.guestbook.Collection.insert_one(data)
        return jsonify({'message': 'Guest book entry logged successfully'}), 200
    except:
        return jsonify({'message': 'An error occured logging guest book entry'}), 500
    
if __name__ == '__main__': 
  
    app.run(debug = True) 