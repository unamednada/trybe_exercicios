from linked_list import LinkedList


class Queue:

    def __init__(self):
        self.__data = LinkedList()
    
    def is_empty(self):
        return self.__data.is_empty()
    
    def enqueue(self, value):
        self.__data.insert_last(value)
    
    def dequeue(self):
        return self.__data.pop_first()
    
    def peek(self):
        return self.__data.get(0)