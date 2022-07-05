import requests


response = requests.get('https://httpbin.org/encoding/utf8')
html = response.text


print(html)
