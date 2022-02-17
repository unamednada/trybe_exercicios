const unidades: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
const valores: number[] = [1000, 100, 10, 1, .1, .01, .001];

export default function convert(valor: number, unidadeBase: string, unidadeDestino: string): number {
  const valorBase: number = valores[unidades.indexOf(unidadeBase)];
  const valorDestino: number = valores[unidades.indexOf(unidadeDestino)];
  return (valor * valorBase) / valorDestino;
}