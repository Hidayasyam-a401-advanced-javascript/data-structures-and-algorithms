'use strict'

let data=require('../challenges/linkedList/linked-list.js')
let l1 = new data;
l1.insert(1);
l1.insert(2);
l1.insert(5);


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

