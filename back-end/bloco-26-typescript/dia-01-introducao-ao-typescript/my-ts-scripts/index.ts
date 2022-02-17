import * as Length from './length';
import * as Mass from './mass';
import * as Capacity from './capacity';
import * as Area from './area';

console.log('50 centímetros em metros são:', Length.convert(50, 'cm', 'm'), 'metros.');
console.log('100 kilogramas em miligramas são:', Mass.convert(100, 'kg', 'mg'), 'miligramas.');
console.log('14 litros em mililitros são:', Capacity.convert(14, 'l', 'ml'), 'mililitros.');
console.log('1000 metros quadrados em kilometros quadrados são:', Area.convert(1000, 'm2', 'km2'), 'km2.');