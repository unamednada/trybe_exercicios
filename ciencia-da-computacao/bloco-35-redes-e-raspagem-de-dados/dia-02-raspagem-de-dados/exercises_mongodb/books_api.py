from mongo_client import client

category = "Open Source"

db = client.catalogue
books = db.books.find({"categories": {"$all": [category]}})
for book in books:
    print(book["title"])
