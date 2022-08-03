class VectorSet:

    def __init__(self, elements=None):
        self.data = [False] * 1001
        self.last_element = 0

        if elements:
            for element in elements:
                self.add(element)

    def add(self, element):
        if not self.data[element]:
            self.data[element] = True
        if element > self.last_element:
            self.last_element = element

    def union(self, other_set):
        union_set = VectorSet()
        for i in range(1001):
            if other_set.data[i] or self.data[i]:
                union_set.add(i)

        return union_set

    def intersection(self, other_set):
        intersection_set = VectorSet()
        for i in range(1001):
            if other_set.data[i] and self.data[i]:
                intersection_set.add(i)

        return intersection_set

    def difference(self, other_set):
        difference_set = VectorSet()
        for i in range(1001):
            if not other_set.data[i] and self.data[i]:
                difference_set.add(i)

        return difference_set

    def is_subset(self, other_set):
        for i in range(1001):
            if self.data[i] and not other_set.data[i]:
                return False

        return True

    def is_superset(self, other_set):
        for i in range(1001):
            if other_set.data[i] and not self.data[i]:
                return False

        return True

    def __str__(self):
        data_string = "{"

        for i in range(self.last_element + 1):
            if self.data[i]:
                data_string += str(i)
                if i < self.last_element:
                    data_string += ", "

        data_string += "}"
        return data_string

    def __contains__(self, element):
        return self.data[element]