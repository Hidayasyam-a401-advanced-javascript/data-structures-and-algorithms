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



// ===============Tests==============
describe(' found Result ', () => {
  test('It should return position of number ', () => {
    expect(BinarySearch([4,8,15,16,23,42], 15)).toStrictEqual(2);
  });
});


describe(' result not found ', () => {
  test('It should return -1', () => {
    expect(BinarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });
});