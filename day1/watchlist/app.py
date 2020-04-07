from flask import Flask
app = Flask(__name__)

@app.route('/')

def index():
    return "<h1>hello,Flask 中国</h1>"

@app.route('/index/<name>')
def home(name):
    return "<h1>Hello, %s</h1>"%name