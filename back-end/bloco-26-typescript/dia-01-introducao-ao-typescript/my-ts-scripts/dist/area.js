"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const unidades = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];
const valores = [1000000, 10000, 100, 1, .01, .001, .00001];
function convert(valor, unidadeBase, unidadeDestino) {
    const valorBase = valores[unidades.indexOf(unidadeBase)];
    const valorDestino = valores[unidades.indexOf(unidadeDestino)];
    return (valor * valorBase) / valorDestino;
}
exports.convert = convert;
