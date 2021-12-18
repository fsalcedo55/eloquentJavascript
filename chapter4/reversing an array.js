// Your code here.

function reverseArray(arr) {
  let newArr = [];
  for (let num of arr) newArr.unshift(num);
  return newArr;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
// console.log(arrayValue);
// → [5, 4, 3, 2, 1]
