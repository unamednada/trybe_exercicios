"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const unidades = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const valores = [1000, 100, 10, 1, .1, .01, .001];
function convert(valor, unidadeBase, unidadeDestino) {
    const valorBase = valores[unidades.indexOf(unidadeBase)];
    const valorDestino = valores[unidades.indexOf(unidadeDestino)];
    return (valor * valorBase) / valorDestino;
}
exports.convert = convert;
