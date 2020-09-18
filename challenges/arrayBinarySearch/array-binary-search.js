'use strict';
function BinarySearch(arr, key) {
  let low = 0;
  let high = arr.length;
  let postion = -1;
  let midpoint = Math.ceil((high + low) / 2);
  while ((midpoint !== low) && (midpoint !== high) && (postion === -1)) {
    let mid_val = arr[midpoint];

    if (mid_val === key) {
      postion = midpoint;
      return postion;
    } else if (mid_val < key) { low = midpoint; midpoint = Math.ceil((high + low) / 2); }
    else if (mid_val > key) {
      high = midpoint;
      midpoint = Math.ceil((high + low) / 2);

    }
  } if (key == arr[0]) { postion = 0; }
  return postion;
}


let arr1 = [10];
let arr2 = [10, 20];
let arr3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log('array #1 ', BinarySearch(arr1, 20));
console.log('array #2 ', BinarySearch(arr2, 20));
console.log('array #3 ', BinarySearch(arr3, 70));