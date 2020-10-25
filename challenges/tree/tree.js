'use strict';
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }

  // Time o(n) : n is the number of nodes
  // Space o(h): h is the height of this tree

  // Root - Left - Right
  preOrder() {
    let output = [];
    let _traverse = (node) => {
      output.push(node.value);
      // Go Left
      if (node.left) _traverse(node.left);
      // Go Right
      if (node.right) _traverse(node.right);
    };
    _traverse(this.root);
    return output;
  }

  // Left - Root - Right
  inOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      output.push(node.value);
      if (node.right) _traverse(node.right);
    };

    _traverse(this.root);
    return output;
  }

  // Left - Right - Root
  postOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      output.push(node.value);
    };

    _traverse(this.root);
    return output;
  }


  add(val) {

    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }

    let _addnode = (node) => {
      if (node.value > val) {
        if (node.left) {
          _addnode(node.left);

        } else { node.left = newNode; }

      } else {
        if (node.right) {
          _addnode(node.right);

        } else { node.right = newNode; }
      }
    };

    _addnode(this.root);
    return this.root;

  }

  Contains(val) {
   
   
    let _contains = (node) => {
      if (node === null) return false;
      if (node.value === val) return true;
      if (node.value > val)
        return _contains(node.left, val);
      return _contains(node.right, val);
    };
    console.log( _contains(this.root));

   

  }



}
module.exports = BinaryTree;
