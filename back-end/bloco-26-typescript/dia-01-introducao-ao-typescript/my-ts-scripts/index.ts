import * as Length from './length';
import * as Mass from './mass';
import * as Capacity from './capacity';

console.log('50 centímetros em metros são:', Length.convert(50, 'cm', 'm'), 'metros.');
console.log('100 kilogramas em miligramas são:', Mass.convert(100, 'kg', 'mg'), 'miligramas.');
console.log('14 litros em mililitros são:', Capacity.convert(14, 'l', 'ml'), 'mililitros.');