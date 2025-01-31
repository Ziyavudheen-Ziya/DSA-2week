function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [5, 9, 2, 1, 4, 3];
bubbleSort(arr);
console.log(arr);

//Big-O = O(n^2)
