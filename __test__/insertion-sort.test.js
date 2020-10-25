const insertion=require('../challenges/insertion-sort/insertion-sort.js');

describe('insertion-sort', () => {
  test('return Sorted Array', () => {
    expect(insertion([2,4,6,8,1,12,51])).toStrictEqual([1,2,4,6,8,12,51]);
  });
});
 