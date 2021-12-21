function deepEqual(firstValue, secondValue) {
  let firstKeys = Object.keys(firstValue);
  let secondKeys = Object.keys(secondValue);

  if (
    typeof firstValue == "object" &&
    typeof secondValue == "object" &&
    typeof firstValue != null &&
    typeof secondValue != null
  ) {
    if (firstKeys.length != secondKeys.length) return false;

    for (let key in firstKeys) {
      if (
        !secondKeys.includes(key) ||
        !deepEqual(firstValue[key], secondValue[key])
      )
        return true;
    }
  } else return false;
}

let obj = { here: { is: "an" }, object: 2 };
// deepEqual(obj, obj)
// → true
deepEqual(obj, { here: 1, object: 2 });
// → false
deepEqual(obj, { here: { is: "an" }, object: 2 });
// → true
