function fibs(n) {
  if (n === 0) return [n];
  let fibArray = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    let next = fibArray[i] + fibArray[i + 1];
    fibArray.push(next);
  }
  return fibArray;
}

function fibsRec(n) {
  if (n === 0) return [n];
}

export { fibs, fibsRec };
