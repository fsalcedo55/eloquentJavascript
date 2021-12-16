function range(numStart, numEnd, numStep = numStart < numEnd ? 1 : -1) {
  let numArr = [];

  if (numStep > 0) {
    for (let i = numStart; i <= numEnd; i += numStep) numArr.push(i);
  } else {
    for (let i = numStart; i >= numEnd; i += numStep) numArr.push(i);
  }
  return numArr;
  console.log({ numArr });
}

function sum(arr) {
  let counter = 0;
  arr.forEach(function (num) {
    counter += num;
  });
  return counter;
}

sum(range(5, 2, -1));
