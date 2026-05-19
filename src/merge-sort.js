function mergeSort(array) {
  if (array.length > 1) {
    let arr = [];
    const half = array.length / 2;
    let arrA = mergeSort(array.slice(0, half));
    let arrB = mergeSort(array.slice(half));

    let j = 0;
    let i = 0;
    while (true) {
      if (arrA[i] > arrB[j]) {
        arr.push(arrB[j]);
        j++;
      } else {
        arr.push(arrA[i]);
        i++;
      }
      if (arrB.length - 1 < j) {
        arr.push(...arrA.slice(i));
        break;
      }
      if (arrA.length - 1 < i) {
        arr.push(...arrB.slice(j));
        break;
      }
    }
    return arr;
  }
  return array;
}
export { mergeSort };
