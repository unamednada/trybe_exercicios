from pymongo import MongoClient
from books_recovery import get_books

client = MongoClient(
  "mongodb+srv://unamednada:Xe7Mu2uEfXGp48t@webscraping.vmz95sc.mongodb.net/"
  + "?retryWrites=true&w=majority"
)

db = client.catalogue
books = get_books()
db.books.drop()
db.books.insert_many(books)

client.close()  # fecha a conexão com o banco de dados
