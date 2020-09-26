'use strict';

let tree = require('../challenges/tree/tree.js');

describe('Tree  ', () => {
  test('successfully instantiate an empty tree', () => {
    let t = new tree;

    expect(t.root).toBeNull();

  });

  test(' successfully instantiate a tree with a single root node', () => {
    let t = new tree;
    t.add(10);
    expect(t.root.value).toEqual(10);

  });

  test(' successfully add a left child and right child to a single root node', () => {
    let t = new tree;
    t.add(10);
    t.add(19);
    t.add(9);
    expect(t.inOrder()).toStrictEqual([10, 19, 9]);

  });
  test(' successfully return a collection from an inorder traversal', () => {
    let t = new tree;
    t.add(10);
    t.add(19);
    t.add(9);
    t.add(1);
    expect(t.inOrder()).toStrictEqual([10, 19, 9, 1]);

  });
  test(' successfully return a collection from an preorder  traversal', () => {
    let t = new tree;
    t.add(10);
    t.add(19);
    t.add(9);
    t.add(1);
    expect(t.preOrder()).toStrictEqual([10, 19, 9, 1]);

  });
  test(' successfully return a collection from an postorder  traversal', () => {
    let t = new tree;
    t.add(10);
    t.add(19);
    t.add(9);
    t.add(1); 
    expect(t.postOrder()).toStrictEqual([1, 9, 19, 10]);

  });
    

});


