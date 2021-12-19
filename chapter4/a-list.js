// Your code here.
function arrayToList(array) {
  // iterate over the array backwards
  let newArr = [];
  let list;
  for (let object of array) newArr.unshift(object);
  // for each element, add an object to the list.
  function prevObj() {
    if (!list) return null;
    else return list;
  }

  for (let element of newArr) {
    list = {
      value: element,
      rest: prevObj(),
    };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  let array = listToArray(list);
  array.unshift(element);
  return arrayToList(array);
}

arrayToList([10, 20]);
// → {value: 10, rest: {value: 20, rest: null}}
listToArray(arrayToList([10, 20, 30]));
// → [10, 20, 30]
prepend(10, prepend(20, null));
// → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
