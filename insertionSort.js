function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let j = i - 1;
    let numToSort = arr[i];

    while (j >= 0 && arr[j] > numToSort) {
      arr[j + 1] = arr[j];

      j = j - 1;
    }

    arr[j + 1] = numToSort;
  }
}

const arr = [4, 2, 1, 9, 7, 3];

insertionSort(arr);
console.log(arr);

//Big-O = O(n^2)