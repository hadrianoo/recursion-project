function fibs(n) {
  if (n === 0) return [n];
  let fibArray = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    let next = fibArray[i] + fibArray[i + 1];
    fibArray.push(next);
  }
  return fibArray;
}

function fibsRec(n, array = [0, 1], i = 0) {
  if (n === 0) return [0];
  if (n <= 2) return array;
  let next = array[i] + array[i + 1];
  array.push(next);
  fibsRec(n - 1, array, i + 1);
  return array;
}
console.log(fibsRec(64));
export { fibs, fibsRec };
