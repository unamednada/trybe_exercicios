class MainMemory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        try:
            return (int)(self.loaded_memory[index])
        except IndexError:
            return 0

    def clean(self):
        """Limpa a memória principal"""
        self.loaded_memory = []
