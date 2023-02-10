from flask import Flask, request, render_template
import nltk
from nltk.chat.util import Chat, reflections

app = Flask(__name__)

pairs = [
    r"my name is (.*)",
    ["hello %1 how are you today?"]
],
[
    r"what is your name",
    ["My name is joke"]
],
[
    r"Can you tell me a joke",
    ["sure! first you look good!"]
],
[
    r"sorry (*)",
    ["I don't have anything say now"]
]

chatbot = Chat(pairs, reflections)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/chat', methods = ["POST"])
def display_chatbot():
    message = request.form["text"]
    response = chatbot.respond(message)
    return response
if __name__ == "__main__":
    app.run()