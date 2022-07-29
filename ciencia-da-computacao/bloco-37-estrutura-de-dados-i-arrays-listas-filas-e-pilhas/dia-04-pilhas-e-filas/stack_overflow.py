class StackOverflow(Exception):

    def __init__(self, message):
        super().__init__(message)

    def __str__(self):
        return self.args[0]
