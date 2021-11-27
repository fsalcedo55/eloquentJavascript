// My solution
let isEven = (N) => {
  if (N % 2 === 0) {
    return true;
  } else if (!N % 2 === 0) {
    return false;
  } else {
    return isEven(N - 2);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

////////////////////////////////
////////////////////////////////

// Book's solution
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
