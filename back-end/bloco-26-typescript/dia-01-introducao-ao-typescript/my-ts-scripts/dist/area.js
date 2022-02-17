"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const unidades = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];
const valores = [1000000, 10000, 100, 1, .01, .0001, .000001];
function exec() {
    const valor = readline_sync_1.default.questionFloat('Valor: ');
    const unidadeBase = readline_sync_1.default.question('Unidade base: ');
    const unidadeDestino = readline_sync_1.default.question('Unidade destino: ');
    const valorFinal = convert(valor, unidadeBase, unidadeDestino);
    console.log(`${valor} ${unidadeBase} equivale a ${valorFinal} ${unidadeDestino}`);
}
function convert(valor, unidadeBase, unidadeDestino) {
    const valorBase = valores[unidades.indexOf(unidadeBase)];
    const valorDestino = valores[unidades.indexOf(unidadeDestino)];
    return (valor * valorBase) / valorDestino;
}
exec();
