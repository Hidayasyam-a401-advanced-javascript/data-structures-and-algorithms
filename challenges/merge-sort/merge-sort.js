
function Mergesort(arr) {
    let n = arr.length;
    //console.log('n : ', n)
  
    if (n > 1) {
      let mid = Math.ceil(n / 2);
      //console.log('mid : ', mid)
      let left = [];
      for (let i = 0; i < mid; i++)
        left.push(arr[i]);
      let right = [];
      for (let i = mid; i < n; i++)
        right.push(arr[i]);
    //   console.log('left : ', left)
    //   console.log('right : ', right)
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
       let v = Merge(left, right, arr)
       return v;
    }
  }
  
  function Merge(left, right, arr) {
  
    let i = 0;
    let j = 0;
    let k = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k]=left[i]
        i = i + 1;
      }
      else {
        arr[k]=right[j]
        j = j + 1;
      }
  
      k = k + 1;
    }
    while (i < left.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  
    // Copy the remaining elements of 
    // R[], if there are any  
    while (j < right.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  
    return arr;
  
  }
  
  module.exports = Mergesort;