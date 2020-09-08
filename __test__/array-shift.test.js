'use straict'

function insertShiftArray(arr,value){

    let mid=Math.ceil((arr.length)/2)
    console.log(mid)
    let output=[];
    for (let i = 0; i <= arr.length; i++) {
      if(i < mid)
       output[i]=arr[i]
      else if (i > mid)
      output[i]=arr[i-1]
      else
       output[i]=value

    }
    return output;
}
// ===============Tests==============
describe('Insert Shift Array - Even Array', () => {
    test('It should return a new array with the new value in the center index position', () => {
      expect(insertShiftArray([2,4,6,8], 5)).toStrictEqual([2,4,5,6,8]);
    });
  });
  describe('Insert Shift Array - Odd', () => {
    test('It should return a new array with the new value in the center index position', () => {
      expect(insertShiftArray([4,8,15,23,42], 16)).toStrictEqual([4,8,15,16,23,42]);
    });
  });