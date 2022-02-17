import readline from 'readline-sync';

const unidades: string[] = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];
const valores: number[] = [1000000, 10000, 100, 1, .01, .001, .00001];

export function exec(): void {
  const valor: number = readline.questionFloat('Valor: ');
  const unidadeBase: string = readline.question( 'Unidade base: ');
  const unidadeDestino: string = readline.question('Unidade destino: ');
  const valorFinal: number = convert(valor, unidadeBase, unidadeDestino);
  console.log(`${valor} ${unidadeBase} equivale a ${valorFinal} ${unidadeDestino}`);
}

function convert(valor: number, unidadeBase: string, unidadeDestino: string): number {
  const valorBase: number = valores[unidades.indexOf(unidadeBase)];
  const valorDestino: number = valores[unidades.indexOf(unidadeDestino)];
  return (valor * valorBase) / valorDestino;
}