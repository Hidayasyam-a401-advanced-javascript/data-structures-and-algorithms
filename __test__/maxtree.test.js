'use strict';

let hashtable = require('../challenges/repeatedword/repeatedword');


test(' successfully return value', () => {
  let t = new hashtable;
  t.add(10);
  t.add(19);
  t.add(9);
  t.add(1);
  expect(t.findmaximumvalue()).toEqual(19);

});
