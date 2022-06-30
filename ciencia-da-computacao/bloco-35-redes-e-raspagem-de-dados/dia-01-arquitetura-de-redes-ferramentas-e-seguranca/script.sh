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

#Exercício 8
#Envie pacotes para o servidor UDP utilizando o Netcat (nc).
nc -u 127.0.0.1 8084

#Exercício 9
#Faça uma chamada ao server utilizando o cURL.
curl -X GET http://localhost:8084

#Exercício 10

#1. Crie um servidor HTTP em sua máquina executando na porta 80. !!! 8080 POR RAZÕES DE SEGURANÇA !!!
python3 flask_api/server.py

#2. Baixe o ngrok e extraia o arquivo baixado em uma pasta de sua preferência.
snap install ngrok
ngrok config add-authtoken <token>

#3. Conforme instruções do site, crie um túnel para a porta 80 de sua máquina. !!! 8080 POR RAZÕES DE SEGURANÇA !!!
ngrok http 8080

#4. Acesse o o link disponibilizado em seu navegador. Utilize ele para acessar de outros dispositivos, como seu smartphone ou outro computador.
curl -X GET http://localhost:8080
curl -X GET https://4d46-2804-14d-5c85-4619-4e38-52ed-bc97-3eca.sa.ngrok.io

#BÔNUS

#Bônus 11.
#Identifique o IP interno e externo da sua máquina.
curl ifconfig.me
ip a

#Bônus 12
#Identifique as interfaces de redes utilizadas por sua máquina e identifique qual está em uso agora.
ip a

#Bônus 13.

#1. Vamos utilizar a ferramenta OpenSSL para gerar nossos certificados.
where openssl

#2.Para gerar nosso próprio certificado auto-assinado, utilize os comandos abaixo.
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem

#3. Acabamos de gerar dois arquivos, o cert.pem (o certificado) e o key.pem (chave privada). Copie os dois arquivos para um diretório onde vamos criar nosso servidor HTTPS.
mkdir openssl && mv cert.pem key.pem openssl
cd openssl

#4. Agora vamos escrever um servidor https usando os módulos nativos do python ssl e http.server.

#5. Acesse o servidor no endereço https://localhost:8000/ utilizando o Firefox (precisa ser o Firefox). 

#6. Acesse o servidor novamente, porém desta vez utilizando cURL.
curl -X GET https://localhost:8000/

#7 Por último, vamos utilizar um recurso do cURL, somente para testes (somente utilize, caso realmente você esteja esperando por aquilo), que é o parâmetro -k ou --insecure.
curl -k -X GET https://localhost:8000/