import requests


response = requests.get('https://api.github.com/users')
users = response.json()

for user in users:
    print(user['login'])
    print(user['html_url'])
    print('\n')
