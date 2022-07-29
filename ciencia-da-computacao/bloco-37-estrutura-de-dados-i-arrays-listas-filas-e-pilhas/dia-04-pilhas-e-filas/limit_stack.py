from stack import Stack
from stack_overflow import StackOverflow


class LimitStack(Stack):

    def __init__(self, limit):
        super().__init__()
        self.__limit = limit

    def push(self, value):
        if len(self.__data) < self.__limit:
            super().push(value)
        else:
            raise StackOverflow("Limit reached")
