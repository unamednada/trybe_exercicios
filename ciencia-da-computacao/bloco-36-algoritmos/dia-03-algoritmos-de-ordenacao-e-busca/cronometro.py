from time import perf_counter


class Cronometro:
    def __init__(self, name):
        self.name = name
    
    def __enter__(self):
        self.start = perf_counter()
    
    def __exit__(self, *exc):
        elapsed = perf_counter() - self.start
        print(f'{self.name} took {elapsed:.2f} seconds')
