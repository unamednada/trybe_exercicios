import readline from 'readline-sync';

const unidades: string[] = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
const valores: number[] = [1000000000, 1000000, 1000, 1, .001, .0001, .0000001];

function exec(): void {
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

exec();