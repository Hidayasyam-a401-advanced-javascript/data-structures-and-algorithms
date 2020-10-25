const hash = require('../challenges/HashTable/hashtable');

describe('Hash Table', () => {
  test('Hash  Add ', () => {
    let hashtable = new hash(1024);
    hashtable.add('Ali', 25);
    hashtable.add('liA', 27);
    hashtable.add('waleed', 29);
    expect(hashtable.contains('liA')).toBeTruthy();
  });

  test('Hash  GET-HASH ', () => {
    let hashtable = new hash(1024);
       
    expect(hashtable.GetHash('Ali')).toStrictEqual(634);
  });

  test('Hash contains : Pass Exist Key  ', () => {
    let hashtable = new hash(1024);
    hashtable.add('Ali', 25);
    hashtable.add('liA', 27);
    hashtable.add('waleed', 29);
    expect(hashtable.contains('Ali')).toBeTruthy();
  });

  test('Hash contains : Pass not Exist Key  ', () => {
    let hashtable = new hash(1024);
    hashtable.add('Ali', 25);
    hashtable.add('liA', 27);
    hashtable.add('waleed', 29);
    expect(hashtable.contains('Waleed')).toBeFalsy();
  });

  test('Hash get : Pass Exist Key  ', () => {
    let hashtable = new hash(1024);
    hashtable.add('Ali', 25);
    hashtable.add('liA', 27);
    hashtable.add('waleed', 29);
    expect(hashtable.get('Ali')).toStrictEqual([25]);
  });

  test('Hash get : Pass not Exist Key  ', () => {
    let hashtable = new hash(1024);
    hashtable.add('Ali', 25);
    hashtable.add('liA', 27);
    hashtable.add('waleed', 29);
    expect(hashtable.get('Waleed')).toBeNull();
  });

});
