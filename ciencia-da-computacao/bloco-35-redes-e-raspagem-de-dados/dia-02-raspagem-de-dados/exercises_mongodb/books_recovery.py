import requests


def get_books():
    return requests.get(
        "https://assets.app.betrybe.com/computer-science/python/entrada-saida/"
        + "books-346aab4788ea58d4c3aa988632da100b.json"
    ).json()
