from linked_list import LinkedList


class Stack:

    def __init__(self):
        self.__data = LinkedList()
    
    def is_empty(self):
        return self.__data.is_empty()
    
    def push(self, value):
        self.__data.insert_last(value)
    
    def pop(self):
        return self.__data.pop_last()
    
    def peek(self):
        return self.__data.get(self.__data.__length - 1)