type filterCallback<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: filterCallback<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if(callback(array[i], i, array)) {
      newArray.push(array[i])
    }
  }

  return newArray;
}

const myArray = [3, 6, 7, 8, 10, 15, 20, 35, 17, 83, -12, 444];

const onlySmallNumbers = myFilter(myArray, (item) => item < 10);
console.log(onlySmallNumbers);
