peca = process.argv[2].toLowerCase();

switch (peca) {
  case "peão":
    console.log("O peão pode mover-se 1 casa para a frente ou, a primeira vez que se move, 2 casa para frente.");
    break;
  case "bispo":
    console.log("O bispo pode mover-se na diagonal quantas casas quiser.");
    break;
  case "cavalo":
    console.log("O cavalo se move em forma de L, sempre 2 + 1 casas.");
    break;
  case "torre":
    console.log("A torre pode mover-se na vertical ou horizontal, quantas casas quiser.");
    break;
  case "rei":
    console.log("O rei se move para qualquer casa adjacente.");
    break;
  case "rainha":
    console.log("A rainha se move na diagonal, vertical ou horizontal, quantas casas quiser.");
    break;
  default:
    console.log("Peça não identificada!");
}