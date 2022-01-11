from flask import render_template, request
from app import app

import logging
import sys
logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)



@app.route('/')
def home():
    return "Hello world!"

@app.route('/template', methods=['GET', 'POST'])
def template():
    if request.form:
        user_name = request.form['user_name']
        user_email = request.form['user_email']
        user_message = request.form['user_message']
        logging.info(user_name)
        logging.info(user_email)
        logging.info(user_message)
    return render_template('home.html')