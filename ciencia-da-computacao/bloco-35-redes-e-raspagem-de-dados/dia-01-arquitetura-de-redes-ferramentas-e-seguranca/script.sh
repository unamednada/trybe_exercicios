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


#Exercício 4
#Agora vamos para a camada de transporte. Crie um servidor TCP usando o módulo socketserver que já vem embutido com o Python.
python3 socketserver_tcp/server.py
telnet localhost 8085


#Exercício 5
#1. Conecte no server do exercício anterior e envie informações. O server deverá imprimir as mensagens enviadas no console.
python3 socketserver_tcp/server.py
telnet localhost 8085

#2. Pare o servidor e verifique o que aconteceu com a conexão que estava aberta com o comando telnet ou nc.
^C


#Exercício 6
#Reinicie o servidor TCP e agora faça uma requisição utilizando o cURL (HTTP).
python3 socketserver_tcp/server.py
curl -X GET http://localhost:8085

#Exercício 7
#Agora vamos explorar o outro protocolo de transporte que aprendemos. Crie um servidor UDP usando o mesmo módulo socketserver.
python3 socketserver_udp/server.py
nc -u 127.0.0.1 8084