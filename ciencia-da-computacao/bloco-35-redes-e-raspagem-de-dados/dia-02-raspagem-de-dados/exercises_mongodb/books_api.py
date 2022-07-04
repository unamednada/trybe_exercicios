from mongo_client import client

category = "Open Source"

db = client.catalogue


def get_books(filter):
    return map(
        lambda b: b["title"], db.books.find({"categories": {"$all": [filter]}})
    )


books = get_books(category)

for book in books:
    print(book)
