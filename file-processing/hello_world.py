from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/hello', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello World from Python!"})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)
