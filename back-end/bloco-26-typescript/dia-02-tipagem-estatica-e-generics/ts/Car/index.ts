import Colors from "./Colors"
import Doors from "./Doors";
import Sides from "./Sides";

class Car {
  _make: string;
  _color: Colors;
  _doors: number;

  constructor(make: string, color: Colors, doors: number) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log('Honk, honk!');
  }

  openTheDoor(door: Doors): void {
    console.log('Abrindo a porta ' + door);
  }

  closeTheDoor(door: Doors): void {
    console.log('Fechando a porta ' + door);
  }

  turnOn(): void {
    console.log('Vruuum');
  }

  turnOff(): void {
    console.log('No more vrum...');
  }

  speedUp(): void {
    console.log('Stronger vruuuum');
  }

  speedDown(): void {
    console.log('Weaker vrum...');
  }

  stop(): void {
    console.log('...');
  }

  turn(side: Sides) {
    console.log('Turning ' + side);
  }
};

export default Car;
