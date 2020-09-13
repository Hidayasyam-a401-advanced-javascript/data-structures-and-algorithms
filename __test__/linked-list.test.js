'use strict'

let data = require('../challenges/linkedList/linked-list.js')
let l1 = new data;
l1.insert(1);
l1.insert(2);
l1.insert(5);


describe('list Instensc  ', () => {
  test('Can successfully instantiate an empty linked list ', () => {
    let l2 = new data;

    expect(l2.head).toBeNull();

  });
});
describe('list Insert first  ', () => {
  test('Can properly insert into the linked list', () => {
    let l2 = new data;
    l2.insert(9);
    expect(l2.head.data).not.toBeNull();

  });
});

describe('list Insert first  ', () => {
  test('The head property will properly point to the first node in the linked list ', () => {
    let l2 = new data;
    l2.insert(7);
    l2.insert(3);
    l2.insert(4);
    l2.insert(1);
    expect(l2.head.data).toEqual(7);

  });
});

describe('list Insert   ', () => {
  test('Can properly insert multiple nodes into the linked list ', () => {
    let l2 = new data;
    l2.insert(7);
    l2.insert(2);
    l2.insert(4);
    l2.insert(5);

    expect(typeof(l2.head.next)).toEqual("object");

  });
});


describe(' list include  ', () => {
  test('It should return true ', () => {
    expect(l1.includes(5)).toBeTruthy();
  });
});


describe('list not include', () => {
  test('It should return false', () => {
    expect(l1.includes(15)).toBeFalsy();
  });
});


describe('return a collection ', () => {
  test('It should return { 1 } -> { 2 } -> { 5 } -> NULL', () => {
    expect(l1.toString()).toStrictEqual("{ 1 } -> { 2 } -> { 5 } -> NULL");
  });
});

