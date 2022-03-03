import Car from "./Car";
import Colors from "./Car/Colors";
import Doors from "./Car/Doors";
import Sides from "./Car/Sides";

const gol = new Car('Volks', Colors.SILVER, 4);

gol.openTheDoor(Doors.DRIVERSIDE);
gol.closeTheDoor(Doors.DRIVERSIDE);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Sides.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Sides.RIGHT);

// etc