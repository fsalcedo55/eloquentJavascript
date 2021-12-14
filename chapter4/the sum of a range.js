function range(numStart, numEnd) {
  let numArr = [];
  let counter;
  for (counter = numStart; counter <= numEnd; counter++) {
    numArr.push(counter);
  }
  return numArr;
}

range(1, 20);
