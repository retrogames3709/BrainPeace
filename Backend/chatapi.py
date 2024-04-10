from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
#Fixed 
CORS(app)

genai.configure(api_key='AIzaSyC9SK0ULLO8I0tWGjHUILyYltHzuJr7Ml8')
model = genai.GenerativeModel('gemini-pro')

@app.route('/api/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')

    response = model.generate_content(user_input).candidates[0].content.parts[0].text

    return jsonify({'message': response})

if __name__ == '__main__':
    app.run(debug=True)
