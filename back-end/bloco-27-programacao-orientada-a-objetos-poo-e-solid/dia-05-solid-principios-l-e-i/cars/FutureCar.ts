// ./FuturisticCar.ts
import { IVehicle } from './IVehicle';

export default class FutureCar implements IVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}