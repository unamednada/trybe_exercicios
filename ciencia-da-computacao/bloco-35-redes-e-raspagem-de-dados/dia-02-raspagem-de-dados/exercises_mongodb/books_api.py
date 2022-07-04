from mongo_client import client

category = "Open Source"

db = client.catalogue


def get_books(filter):
    return db.books.find({"categories": {"$all": [filter]}})["title"]


books = get_books(category)

for book in books:
    print(book)
