from functools import reduce
import json


def json_reader(file_name):
    with open(file_name, 'r') as file:
        return json.load(file)


def categories_list_maker(book_list):
    raw_categories = sorted(list(
        set(reduce(
            lambda x, y: x + y,
            [book['categories'] for book in book_list]
        ))
    ))
    return [category for category in raw_categories]


def calculate_category_percentage(book_list, category):
    return round(len(
        [
            book for book in book_list
            if category in book['categories']
        ]) / len(book_list) * 100, 2)


def csv_writer(file_name, header, data):
    with open(file_name, 'w') as file:
        file.write(header + '\n')
        for row in data:
            file.write(','.join(row) + '\n')


try:
    books = json_reader('./exercicios/library.json')
except FileNotFoundError:
    print('File not found')
else:
    categories = categories_list_maker(books)
    total_books = len(books)
    header = 'Category,Percentage'
    data = [
        (category, f"{calculate_category_percentage(books, category)}")
        for category in categories
    ]
    csv_writer('./exercicios/categories.csv', header, data)
