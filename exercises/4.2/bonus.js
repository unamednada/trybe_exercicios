let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let i = 1; i < numbers.length; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//     if (numbers[i] < numbers[j]) {
//       let min = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = min;
//     }
//   }
// }

// for (let i = 1; i < numbers.length; i++) {
//   for (let j = 0; j < numbers.length; j++) {
//     if (numbers[i] > numbers[j]) {
//       let max = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = max;
//     }
//   }
// }

console.log(numbers);

newNumbers = numbers.map((number, index) => {
  if (index < numbers.length - 1) {
    return number * numbers[index + 1];
  } else {
    return number * 2;
  }
});

console.log(newNumbers);