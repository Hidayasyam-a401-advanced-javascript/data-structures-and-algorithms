'use strict'

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class linkedlist {

  constructor() {
    this.head = null;
  }

  insertFirst(node) {

    //console.log(node)

    this.head = node;




  }

  append(value) {

    let node = new Node(value)
    if (this.head === null)
      this.insertFirst(node)


    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;

      }
      current.next = node;

    }
  }

  insertBefore(val,newval){
    let node= new Node(newval);
    if((this.head.data===val)|| this.head ===null)
    {
      let current=this.head;
      this.insertFirst(node);
      this.head.next=current
    }
    else{
      let current=this.head;

    }

  }
  includes(val) {

    let current = this.head;
    while (current !== null) {

      //console.log(count)
      if (current.data === val)
        return true;

      current = current.next
    }
    return false

  }
  toString() {
    let current = this.head;
    let content = "";

    while (current !== null) {
      //console.log(current.data, "->");
      content = content + `{ ${current.data} } -> `
      current = current.next;
    }
    return content + 'NULL'
  }

}

module.exports = linkedlist;
