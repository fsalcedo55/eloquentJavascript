function range(numStart, numEnd) {
  let numArr = [];
  let counter;
  for (counter = numStart; counter <= numEnd; counter++) {
    numArr.push(counter);
  }
  return numArr;
}

function sum(arr) {
  let counter = 0;
  arr.forEach(function (num) {
    counter += num;
    return counter;
  });
  console.log({ counter });
}

sum(range(1, 10));
