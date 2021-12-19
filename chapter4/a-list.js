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

arrayToList([10, 20]);
