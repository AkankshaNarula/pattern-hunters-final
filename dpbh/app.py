from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import subprocess
import pandas as pd

app = Flask(__name__)
CORS(app)


@app.route('/',methods = ['POST', 'GET'])
def result():
    data = request.get_json()
    data=data['value']
    print(data)
    print(type(data))
    with open('Bern096.pickle','rb') as f:
        model=pickle.load(f)
    prediction=(model.predict([data])[0])
    print(prediction)
    if(prediction==1):
        result="It is a Dark Pattern"
    else:
        result="It is not a Dark Pattern"
    return jsonify(result=result)

@app.route('/url',methods = ['POST', 'GET'])
def url():
    global data
    data = request.get_json()
    data=data['value']
    print(data)
    # print(type(data))
    text_file = open("url.txt", "w")
    text_file.write(data)
    text_file.close()
    spider_name = "darkpatterns"
    subprocess.check_output(['scrapy', 'crawl', spider_name, "-O", "output.csv"])
    # with open("output.csv") as items_file:
    #     output= items_file.read()
    #     # df2= items_file.read()
    df=pd.read_csv('output.csv')
    df_filled = df.fillna(' ')
    result = pd.concat([df_filled['1'], df_filled['2'], df_filled['3']], axis=1)
    result_single_column = result.stack()
    result_single_column = result_single_column.reset_index(drop=True)
    df=result_single_column

    with open('Bern096.pickle','rb') as f:
        model=pickle.load(f)
    results=[]
    def preval(df1):
        n=df1.size
        for i in range(n):
            if model.predict_proba([df[i]])[0,1]>0.9999:
                results.append(df1[i])
        if(len(results)==0):
            return False
        else:
            return results

    output=preval(df)
    # print(type(result))
    # result=["Line1","Line2","Line3"]
    # outputlist=""
    count=1
    outputstring=""
    for i in output:
        outputstring=outputstring+f"Dark Pattern {count}: {i} \n"
        count=count+1
    return jsonify(result=outputstring)

@app.route('/get_link',methods = ['POST', 'GET'])
def Get_lInk():
    print(data)
    return data

@app.route('/result',methods = ['POST', 'GET'])
def output():
    result=["Line1","Line2","Line3"]
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)
