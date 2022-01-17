import json

from flask import render_template
from app import app

import logging
import sys
logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)



@app.route('/')
def home():
    return render_template('home.html')

@app.route('/reports')
def reports():
    data = json.loads("""
    {
       "data":[
          {
             "report":"Report 1",
             "author":"Alice",
             "data":[
                {
                   "design":"A",
                   "purchase":2,
                   "trial":40
                },
                {
                   "design":"B",
                   "purchase":4,
                   "trial":50
                }
             ]
          },
          {
             "report":"Report 2",
             "author":"Bob",
             "data":[
                {
                   "design":"A",
                   "purchase":64,
                   "trial":1280
                },
                {
                   "design":"B",
                   "purchase":128,
                   "trial":1600
                }
             ]
          }
       ]
    }
    """)
    return data


@app.route('/datgui')
def datgui():
    return render_template('datgui.html')