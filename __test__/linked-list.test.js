'use strict';

let data = require('../challenges/linkedList/linked-list.js');


describe('list Instensc  ', () => {
  test('Can successfully instantiate an empty linked list ', () => {
    let l2 = new data;

    expect(l2.head).toBeNull();

  });
});
describe('list Insert first  ', () => {
  test('Can properly insert into the linked list', () => {
    let l2 = new data;
    l2.insertFirst(9);
    expect(l2.head.data).not.toBeNull();

  });
});

describe('list Insert first  ', () => {
  test('The head property will properly point to the first node in the linked list ', () => {
    let l2 = new data;
    l2.append(7);
    l2.append(3);
    l2.append(4);
    l2.append(1);
    expect(l2.head.data).toEqual(7);

  });
});

describe('list Insert   ', () => {
  test('Can properly insert multiple nodes into the linked list ', () => {
    let l2 = new data;
    l2.append(7);
    l2.append(2);
    l2.append(4);
    l2.append(5);

    expect(typeof (l2.head.next)).toEqual('object');

  });
});


describe(' list include  ', () => {
  test('It should return true ', () => {
    let l2 = new data;
    l2.append(7);
    l2.append(2);
    l2.append(4);
    l2.append(5);
    expect(l2.includes(5)).toBeTruthy();
  });
});


describe('list not include', () => {
  test('It should return false', () => {
    let l2 = new data;
    l2.append(7);
    l2.append(2);
    l2.append(4);
    l2.append(5);
    expect(l2.includes(15)).toBeFalsy();
  });
});


describe('return a collection ', () => {
  test('It should return { 1 } -> { 2 } -> { 5 } -> NULL', () => {
    let l2 = new data;
    l2.append(1);
    l2.append(2);
    l2.append(5);
    //l2.append(11);
    expect(l2.toString()).toStrictEqual('{ 1 } -> { 2 } -> { 5 } -> NULL');
  });
});



describe('list append   ', () => {
  test('Insert new node to the end of list ', () => {
    let l2 = new data;
    l2.append(51);
    l2.append(33);
    l2.append(14);
    l2.append(11);

    expect(l2.toString()).toStrictEqual('{ 51 } -> { 33 } -> { 14 } -> { 11 } -> NULL');

  });
});

describe('list Insert after  ', () => {
  test('if list is empty ', () => {
    let l2 = new data;
    expect(l2.insertafter()).toBeNull();

  });
});

describe('list Insert after  ', () => {
  test('if the value dose not exist in list ', () => {
    let l2 = new data;
    l2.append(51);
    l2.append(33);
    l2.append(14);
    l2.append(11);
    expect(l2.insertafter(10, 55)).toEqual('value dose not exist we can\'t Insert new Value');

  });
});
describe('list Insert after  ', () => {
  test('if the value exist in list ', () => {
    let l2 = new data;
    l2.append(51);
    l2.append(33);
    l2.append(14);
    l2.append(11);
    l2.insertafter(33, 10);
    expect(l2.toString()).toStrictEqual('{ 51 } -> { 33 } -> { 10 } -> { 14 } -> { 11 } -> NULL');

  });
});

describe('list Insert Before  ', () => {
  test('if list is empty ', () => {
    let l2 = new data;
    expect(l2.insertafter()).toBeNull();

  });
});

describe('list Insert before  ', () => {
  test('if the value dose not exist in list ', () => {
    let l2 = new data;
    l2.append(51);
    l2.append(33);
    l2.append(14);
    l2.append(11);
    expect(l2.insertafter(10, 55)).toEqual('value dose not exist we can\'t Insert new Value');

  });
});


describe('list Insert Before  ', () => {
  test('if the value exist in list ', () => {
    let l2 = new data;
    l2.append(51);
    l2.append(33);
    l2.append(14);
    l2.append(11);
    l2.insertBefore(33, 10);
    expect(l2.toString()).toStrictEqual('{ 51 } -> { 10 } -> { 33 } -> { 14 } -> { 11 } -> NULL');

  });

  describe('KhFromEnd ', () => {
    test('if is empty ', () => {
      let l2 = new data;

      expect(l2.kthFromEnd(2)).toStrictEqual('Excption');

    });

  });

  describe('KhFromEnd ', () => {
    test('if not empty ', () => {
      let l2 = new data;
      l2.append(51);
      l2.append(33);
      l2.append(14);
      l2.append(11);
      expect(l2.kthFromEnd(33)).toEqual(2);

    });

  });



  describe('Zip List ', () => {
    test('if lists have same length ', () => {
      let l1 = new data;
      let l2 = new data;
      l2.append(1);
      l2.append(2);
      l2.append(5);
      let l3 = new data;
      l3.append(10);
      l3.append(33);
      l3.append(14);
      l1.zipLists(l2,l3);
      expect(l1.toString()).toStrictEqual('{ 1 } -> { 10 } -> { 2 } -> { 33 } -> { 5 } -> { 14 } -> NULL');

    });

  });

  describe('Zip List ', () => {
    test('if second list  have less length ', () => {
      let l1 = new data;
      let l2 = new data;
      l2.append(1);
      l2.append(2);
      l2.append(5);
      let l3 = new data;
      l3.append(10);
      l3.append(33);
     
      l1.zipLists(l2,l3);
      expect(l1.toString()).toStrictEqual('{ 1 } -> { 10 } -> { 2 } -> { 33 } -> { 5 } -> NULL');

    });

  });

  describe('Zip List ', () => {
    test('if first  list  have less length ', () => {
      let l1 = new data;
      let l2 = new data;
      l2.append(1);
      l2.append(2);
     
      let l3 = new data;
      l3.append(10);
      l3.append(33);
      l2.append(5);
      l1.zipLists(l2,l3);
      expect(l1.toString()).toStrictEqual('{ 1 } -> { 10 } -> { 2 } -> { 33 } -> { 5 } -> NULL');

    });

  });
});
