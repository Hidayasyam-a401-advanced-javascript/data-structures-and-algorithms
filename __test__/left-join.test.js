const HashTable = require('../challenges/HashTable/hashtable');
const Join =require('../challenges/left-join/left-join');
describe('Hash Table', () => {
  test('Hash  Add ', () => {
    let Lefttable = new HashTable(1024);
    let RightTable = new HashTable(1024);

    Lefttable.add('found', 'foundLeft');
    Lefttable.add('apple', 'AppleLeft');
    Lefttable.add('eappl', 'AppleLeft');
    Lefttable.add('orange', 'orangeLeft');
    Lefttable.add('Mohammed', 'Saif');
    RightTable.add('found', 'foundRight');
    RightTable.add('apple', 'AppleRight');
    RightTable.add('orange', 'orangeRight');
    RightTable.add('Waleed', 'Farraj');
    //leftJOIN(Lefttable, RightTable)
    expect(Join(Lefttable, RightTable)).toEqual(5);
  });

});