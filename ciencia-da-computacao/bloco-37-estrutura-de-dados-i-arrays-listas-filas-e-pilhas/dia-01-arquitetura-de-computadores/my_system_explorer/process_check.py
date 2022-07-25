from time import sleep
from os import getpid
from subprocess import check_output


PID = getpid()
print(PID)
sleep(20)

print(check_output(["ps", "aux", "|", "grep", str(PID)]).decode("UTF-8"))
