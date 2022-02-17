"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const unidades = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
const valores = [1000000000, 1000000, 1000, 1, .001, .0001, .0000001];
function convert(valor, unidadeBase, unidadeDestino) {
    const valorBase = valores[unidades.indexOf(unidadeBase)];
    const valorDestino = valores[unidades.indexOf(unidadeDestino)];
    return (valor * valorBase) / valorDestino;
}
exports.convert = convert;
