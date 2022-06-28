#Exercício 1
#1. Faça uma chamada GET, utilizando o cURL.
curl -X GET http://127.0.0.1:5000

#2. Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.
curl -X POST http://127.0.0.1:5000 -H "Content-Type: application/json" -d '{"user_name":"unamednada"}'

#3. Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.
curl -X GET http://127.0.0.1:5000/headers -H "Authorization: token"

#Exercício 2
#1. Faça uma chamada GET, utilizando o cURL, para "google.com".
curl -X GET google.com

#2. Faça uma nova chamada a "google.com", porém agora utilizando o parâmetro -L ou --location, que serve para "seguir redirecionamentos".
curl -L google.com

#Exercício 3
#Agora utilizando o wget, pegue o conteúdo da página do site da Trybe, depois abra o arquivo HTML baixado em seu navegador.
wget http://www.trybe.com.br/
