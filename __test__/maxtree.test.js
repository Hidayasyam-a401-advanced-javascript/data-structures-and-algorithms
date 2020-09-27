'use strict';

let maxtree = require('../challenges/BinaryTreeMax/maxtree');


test(' successfully return max value', () => {
    let t = new maxtree;
    t.add(10);
    t.add(19);
    t.add(9);
    t.add(1);
    expect(t.findmaximumvalue()).toEqual(19);

  });

  test(' successfully return empty  if tree is empty', () => {
    let t = new maxtree;
   
    expect(t.findmaximumvalue()).toStrictEqual("is Empty .. !");

  });