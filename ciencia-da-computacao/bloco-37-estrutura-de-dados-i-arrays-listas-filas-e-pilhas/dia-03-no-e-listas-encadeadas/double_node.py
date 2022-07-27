class DoubleNode:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None
    
    def __str__(self):
        return f"DoubleNode(data={self.data}, next={self.next}, prev={self.prev})"
