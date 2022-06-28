curl -X GET http://127.0.0.1:5000
curl -X POST http://127.0.0.1:5000 -H "Content-Type: application/json" -d '{"user_name":"unamednada"}'
curl -X GET http://127.0.0.1:5000/headers -H "Authorization: token"