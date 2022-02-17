"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = exports.exec = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const unidades = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const valores = [1000, 100, 10, 1, .1, .01, .001];
function exec() {
    const valor = readline_sync_1.default.questionFloat('Valor: ');
    const unidadeBase = readline_sync_1.default.question('Unidade base: ');
    const unidadeDestino = readline_sync_1.default.question('Unidade destino: ');
    const valorFinal = convert(valor, unidadeBase, unidadeDestino);
    console.log(`${valor} ${unidadeBase} equivale a ${valorFinal} ${unidadeDestino}`);
}
exports.exec = exec;
function convert(valor, unidadeBase, unidadeDestino) {
    const valorBase = valores[unidades.indexOf(unidadeBase)];
    const valorDestino = valores[unidades.indexOf(unidadeDestino)];
    return (valor * valorBase) / valorDestino;
}
exports.convert = convert;
