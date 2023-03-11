from flask import Flask, render_template

app = Flask(__name__)

@app.route("/event/")
def getCalcPage():
    return(render_template('event.html.jinja'))

@app.route("/")
def getHomePage():
    return(render_template('home.html.jinja'))

if __name__ == "__main__":
    Flask.run(app)
