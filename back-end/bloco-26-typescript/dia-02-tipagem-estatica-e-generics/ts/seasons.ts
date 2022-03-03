import readline from 'readline-sync';
import { Months, Seasons } from './enums';

const months = Object.values(Months);

const choiceMonth = readline.keyInSelect(months, 'Escolha um mês', { cancel: 'SAIR'});

if (choiceMonth === -1) {
  console.log('Saindo');
  process.exit();
}

const seasonsSouth = {
  [Seasons.OUTONO]: [Months.MARCO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.INVERNO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
  [Seasons.PRIMAVERA]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.VERAO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARCO],
}

const seasonsNorth = {
  [Seasons.PRIMAVERA]: seasonsSouth[Seasons.OUTONO],
  [Seasons.VERAO]: seasonsSouth[Seasons.INVERNO],
  [Seasons.OUTONO]: seasonsSouth[Seasons.PRIMAVERA],
  [Seasons.INVERNO]: seasonsSouth[Seasons.VERAO],
}

const hemispheres = {
  "Norte": seasonsNorth,
  "Sul": seasonsSouth
}

const choiceHemisphere = readline.keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério", { cancel: "SAIR" });

if (choiceHemisphere === -1) {
  console.log("Saindo!");
  process.exit();
}

const month = Object.values(Months)[choiceMonth];

const hemisphere = Object.keys(hemispheres)[choiceHemisphere];

console.log(`Mês: \n${month}`);
console.log(`Hemisfério: \n${hemisphere}`);
console.log(`Estações:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere]
Object.entries(chosenHemisphereSeasons).map((entry) => {
  const seasons = entry[0];
  const months = entry[1];

  if (months.includes(month)) console.log(seasons);
});