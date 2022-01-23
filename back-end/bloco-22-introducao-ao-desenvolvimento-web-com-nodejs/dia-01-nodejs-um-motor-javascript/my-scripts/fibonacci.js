const readLine = require('readline-sync');

const fibo = n => {
  const fibo_arr = [0, 1];
  for (let i = 2; i < n + 1; i += 1) {
    fibo_arr[i] = fibo_arr[i - 2] + fibo_arr[i - 1];
  }
  return fibo_arr.filter(f => f !== 0);
}

const num = readLine.questionInt('Enter number of fibonacci you want:\n');

console.log(fibo(num));