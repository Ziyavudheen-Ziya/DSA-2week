function selectionSort(arr) {
  let temp;

  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

const arr = [4, 3, 6, 1, 7, 2];

console.log(selectionSort(arr));
