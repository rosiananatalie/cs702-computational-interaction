import json
from flask import render_template, request
from app import app
from usecase.cp.style_cp import StyleCP

import logging
import sys
logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)



@app.route('/')
def home():
    return render_template('home.html')


@app.route('/cp')
def cp():
    return render_template('cp.html')


@app.route('/cp/api', methods=['POST'])
def cp_api():
    if request.is_json:
        logging.info(request.get_json())
        d = request.get_json()

        cp = StyleCP()
        logging.info(cp)
        cp.add_h1_r_constraint(d['h1-r-min'], d['h1-r-max'])
        cp.add_h1_size_constraint(d['h1-size-min'], d['h1-size-max'])
        solutions = cp.get_solutions()
        return {"solutions": solutions}

    return {}


@app.route('/datgui')
def datgui():
    return render_template('datgui.html')