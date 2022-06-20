class Tv:
    def __init__(self, size):
        self.__volume = 50
        self.__channel = 1
        self.__size = size
        self.__power = False

    def volume_up(self):
        if self.__volume < 99:
            self.__volume += 1
        else:
            raise Exception("Volume is at max")
    
    def volume_down(self):
        if self.__volume > 1:
            self.__volume -= 1
        else:
            raise Exception("Volume is at min")
    
    def change_channel(self, channel):
        if 1 <= channel <= 99:
            self.__channel = channel
        else:
            raise Exception("Channel is out of range")
    
    def power(self):
        self.__power = not self.__power

    def __str__(self):
        return f"Channel: {self.channel}, Volume: {self.volume}"