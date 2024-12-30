from flask import Flask, jsonify, request
from pymongo import MongoClient
import os

app = Flask(__name__) 

connection_string = os.environ.get('CONNECTION_STRING')

client = MongoClient(connection_string)

@app.route('/', methods = ['POST']) 
def home():
    print(connection_string == None)
    print(len(connection_string))
    print(request.get_json().name)
    try:
        data = request.get_json() 
        client.guestbook.Collection.insert_one(data)
        return jsonify({'message': 'Guest book entry logged successfully'}), 200
    except:
        return jsonify({'message': 'An error occured logging guest book entry'}), 500
    
if __name__ == '__main__': 
  
    app.run(debug = True) 