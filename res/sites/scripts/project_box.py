import pyscript
import json

#fix imports
#TODO:
#watch some pyscript tutorial

def read_json(json_file):
    with open(json_file, 'r') as f:
        return json.load(f)

dat = read_json("json/projects.json")

#work with the json object

print(dat)

#put the json element in a html paragraph
#maybe that?:
document.add_paragraph(json)