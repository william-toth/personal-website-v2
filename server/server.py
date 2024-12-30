from flask import Flask, jsonify, request
from pymongo import MongoClient
import os
import ssl

app = Flask(__name__) 

connection_string = os.environ.get('CONNECTION_STRING')

client = MongoClient('mongodb+srv://wat4th:FreshNed123@willcluster.s90is.mongodb.net/')

@app.route('/', methods = ['POST']) 
def home():
    try:
        print("hi")
        print(request.get_json())
        data = request.get_json() 
        client.guestbook.Collection.insert_one(data)
        return jsonify({'message': 'Guest book entry logged successfully'}), 200
    except:
        return jsonify({'message': 'An error occured logging guest book entry'}), 500
    
if __name__ == '__main__': 
  
    app.run(debug = True) 