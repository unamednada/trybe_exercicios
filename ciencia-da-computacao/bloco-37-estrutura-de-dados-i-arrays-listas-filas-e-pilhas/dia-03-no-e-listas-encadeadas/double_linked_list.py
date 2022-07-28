from double_node import DoubleNode


class DoubleLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.__length = 0
    
    def __str__(self):
        return f"DoubleLinkedList(len={self.__length}, value={self.head})"
    
    def __len__(self):
        return self.__length
    
    def insert_first(self, value):
        first_value = DoubleNode(value)
        self.head.prev = first_value
        first_value.next = self.head
        self.head = self.tail = first_value

        self.__length += 1

    def insert_last(self, value):
        last_value = DoubleNode(value)
        current_value = self.head
        if current_value is None:
            self.head = self.tail = last_value
        while current_value.next:
            current_value = current_value.next
        current_value.next = last_value
        last_value.prev = current_value
        self.tail = last_value
        self.__length += 1
    
    def insert_at(self, value, index):
        if index < 1:
            return self.insert_first(value)
        if index >= self.__length:
            return self.insert_last(value)
        current_value = self.head
        while index > 1:
            current_value = current_value.next
            index -= 1
        new_value = DoubleNode(value)
        new_value.next = current_value.next
        new_value.prev = current_value
        current_value.next = new_value
        self.__length += 1
    
    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1