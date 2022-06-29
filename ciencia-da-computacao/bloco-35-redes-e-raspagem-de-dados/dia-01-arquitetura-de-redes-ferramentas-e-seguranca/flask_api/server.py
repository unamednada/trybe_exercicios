from flask import Flask, request

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'GET':
        return 'Hello World!', 200
    elif request.method == 'POST':
        user_name = request.get_json()['user_name']
        return f'Hello {user_name}!', 200


@app.route('/headers', methods=['GET'])
def headers():
    auth = request.headers.get('Authorization')

    if auth != 'token':
        return 'Unauthorized', 401
    return 'Authorized', 200


if __name__ == '__main__':
    from waitress import serve
    serve(app, host="localhost", port=8080)
