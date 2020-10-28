const Quick=require('../challenges/Quicksort/QuickSort');

describe('Quick-sort', () => {
    test('return Sorted Array', () => {
      expect(Quick([8,4,32,42,16,15],0,5)).toStrictEqual([4,8,15,16,32,42]);
    });
  });
 