class Stack:

    def __init__(self):
        self.__data = list()

    def is_empty(self):
        return not len(self.__data)

    def push(self, value):
        self.__data.append(value)

    def pop(self):
        return self.__data.pop()

    def peek(self):
        return self.__data[len(self.__data) - 1]

    def min_value(self):
        return min(self.__data)
