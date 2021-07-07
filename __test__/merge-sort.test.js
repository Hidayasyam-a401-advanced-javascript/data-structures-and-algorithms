const merge=require('../challenges/merge-sort/merge-sort.js');

describe('merge-sort', () => {
    test('return Sorted Array', () => {
      expect(merge([2,4,6,8,1,12,51])).toStrictEqual([1,2,4,6,8,12,51]);
    });
  });
 