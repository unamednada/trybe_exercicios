"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const unidades = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
const valores = [1000000000, 1000000, 1000, 1, .001, .0001, .0000001];
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
