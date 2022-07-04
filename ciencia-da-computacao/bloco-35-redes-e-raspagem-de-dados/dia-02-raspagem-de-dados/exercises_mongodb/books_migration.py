from books_recovery import get_books
from mongo_client import client


db = client.catalogue
books = get_books()
db.books.drop()
db.books.insert_many(books)

client.close()  # fecha a conexão com o banco de dados
