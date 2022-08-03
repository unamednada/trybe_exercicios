class VectorSet:
    
    def __init__(self):
        self.data = [False] * 1001
        self.last_element = 0
    
    def add(self, element):
        if not self.data[element]:
            self.data[element] = True
        if element > self.last_element:
            self.last_element = element
    
    def __str__(self):
        data_string = "{"

        for i in range(self.last_element + 1):
            if self.data[i]:
                data_string += str(i)
                if i < self.last_element:
                    data_string += ", "
        
        data_string += "}"
        return data_string