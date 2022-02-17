const unidades: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
const valores: number[] = [1000, 100, 10, 1, .1, .01, .001];

export function convert(valor: number, unidadeBase: string, unidadeDestino: string): number {
  const valorBase: number = valores[unidades.indexOf(unidadeBase)];
  const valorDestino: number = valores[unidades.indexOf(unidadeDestino)];
  return (valor * valorBase) / valorDestino;
}