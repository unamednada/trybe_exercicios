from mongo_client import client

category = "Open Source"

db = client.catalogue


def get_books_by_category(filter):
    return map(
        lambda b: b["title"], db.books.find({"categories": {"$all": [filter]}})
    )


# books = get_books(category)

# for book in books:
#     print(book)


def published_books_per_category():
    pipelines = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
    ]
    return db.books.aggregate(pipelines)


for category in published_books_per_category():
    print(f"{category['_id']}: {category['count']}")
