'use strict';

let tree = require('../challenges/BinaryTreeMax/maxtree');


test(' successfully return value', () => {
  let t = new tree;
  t.add(10);
  t.add(19);
  t.add(9);
  t.add(1);
  expect(t.findmaximumvalue()).toEqual(19);

});
