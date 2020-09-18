
'use straict';


function revers(arr) {

  let array = [];
  for (let i = arr.length - 1; i >= 0; i--) {

    array.push(arr[i]);

  }
  return array;
}

let arr = [15, 12, 11, 10, 5, 4, 3, 2, 1, 0];
console.log(revers(arr));
