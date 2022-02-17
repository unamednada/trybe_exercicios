import readline from 'readline-sync';

const unidades: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const valores: number[] = [1000, 100, 10, 1, .1, .01, .001];

export function exec(): void {
  const valor: number = readline.questionFloat('Valor: ');
  const unidadeBase: string = readline.question( 'Unidade base: ');
  const unidadeDestino: string = readline.question('Unidade destino: ');
  const valorFinal: number = convert(valor, unidadeBase, unidadeDestino);
  console.log(`${valor} ${unidadeBase} equivale a ${valorFinal} ${unidadeDestino}`);
}

export function convert(valor: number, unidadeBase: string, unidadeDestino: string): number {
  const valorBase: number = valores[unidades.indexOf(unidadeBase)];
  const valorDestino: number = valores[unidades.indexOf(unidadeDestino)];
  return (valor * valorBase) / valorDestino;
}