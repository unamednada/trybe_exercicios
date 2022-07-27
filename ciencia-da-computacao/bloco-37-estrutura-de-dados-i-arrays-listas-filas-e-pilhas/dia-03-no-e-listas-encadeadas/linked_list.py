from node import Node


class LinkedList:
    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next, self.head_value = self.head_value, first_value
        self.__length += 1

    def insert_last(self, value):
        last_value = Node(value)
        current_value = self.head_value

        if current_value is None:
            self.head_value = last_value

        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        self.__length += 1

    def insert_at(self, value, index):
        if index < 1:
            return self.insert_first(value)
        if index >= self.__length:
            return self.insert_last(value)
        current_value = self.head_value

        while index > 1:
            current_value = current_value.next
            index -= 1

        new_value = Node(value)
        new_value.next = current_value.next
        current_value.next = new_value
        self.__length += 1
    
    def pop_first(self):
        to_remove = self.head_value
        if to_remove:
            self.head_value = to_remove.next
            self.__length -= 1
        return to_remove
    
    def pop_last(self):
        if self.__length <= 1:
            return self.pop_first()
        
        current_value = self.head_value

        while current_value.next.next:
            current_value = current_value.next
        
        to_remove = current_value.next
        current_value.next = None
        self.__length -= 1
        return to_remove
    
    def pop_at(self, index):
        if index < 1:
            return self.pop_first()
        if index >= self.__length:
            return self.pop_last()
        current_value = self.head_value

        while index > 1:
            current_value = current_value.next
            index -= 1

        to_remove = current_value.next
        current_value.next = to_remove.next
        self.__length -= 1
        return to_remove

    def get(self, index):
        to_return = self.head_value
        if to_return:
            while index > 0 and to_return.next:
                to_return = to_return.next
                index -= 1
            return Node(to_return.value)
    
    def is_empty(self):
        return self.__length == 0
