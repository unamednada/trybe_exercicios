#1. Faça uma chamada GET, utilizando o cURL.
curl -X GET http://127.0.0.1:5000

#2. Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.
curl -X POST http://127.0.0.1:5000 -H "Content-Type: application/json" -d '{"user_name":"unamednada"}'

#3. Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.
curl -X GET http://127.0.0.1:5000/headers -H "Authorization: token"