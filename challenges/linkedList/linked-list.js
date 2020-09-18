'use strict';

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

    console.log('call first ', node.data);

    this.head = node;




  }

  append(value) {

    let node = new Node(value);
    if (this.head === null)
      this.insertFirst(node);


    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;

      }
      current.next = node;

    }
  }

  insertBefore(val, newval) {
    let node = new Node(newval);
    if (this.head === null)
      return null;
    else if ((this.head.data === val) || this.head === null) {
      let current = this.head;
      this.insertFirst(node);
      this.head.next = current;
    }
    else {
      let tail = this.head.next;
      let current = this.head;
      while (tail !== null) {
        if (tail.data === val) {
          current.next = node;
          node.next = tail;
          break;
        }

        else if (tail.next === null)
          return 'value dose not exist we can\'t Insert new Value';
        current = current.next;
        tail = tail.next;
      }

    }

  }

  insertafter(val, newval) {
    let node = new Node(newval);
    if (this.head === null)
      return null;

    else {
      let tail = this.head.next;
      let current = this.head;
      while (current !== null) {
        if (current.data === val) {
          current.next = node;
          node.next = tail;
          break;
        }


        else if (tail === null && current.next == null)
          return 'value dose not exist we can\'t Insert new Value';
        current = current.next;
        tail = tail.next;


      }
    }
  }
  includes(val) {

    let current = this.head;
    while (current !== null) {

      //console.log(count)
      if (current.data === val)
        return true;

      current = current.next;
    }
    return false;

  }
  kthFromEnd(k) {
    if (!this.head) {
      return ('Excption');

    }
    else if (!this.includes(k)) {
      return ('Excption');

    }
    else {
      let length = 0;
      let counter = 0;
      let current = this.head;

      let currentSeconedLoop = this.head;
      while (current.next !== null) {
        length++;

        current = current.next;
      }

     
      while (currentSeconedLoop.data !== k && currentSeconedLoop !== null) {
        counter++;
        currentSeconedLoop = currentSeconedLoop.next;
      } 
      return length - counter;
    }
  }

  toString() {
    let current = this.head;
    let content = '';
    while (current !== null) {
      content = content + `{ ${current.data} } -> `;
      current = current.next;
    }
    return content + 'NULL';
  }

  zipLists(list1, list2){

    //let l1=new linkedlist();
    let currentListone=list1.head;
    console.log(currentListone);
    let currentListTwo=list2.head;
    console.log(currentListTwo);
    console.log('hi');
    while(currentListone !== null || currentListTwo !== null)
    {    // console.log('hi')
      if(currentListone!== null)
      {
        //console.log('list1 : ',currentListone.data)
        this.append(currentListone.data);
        currentListone=currentListone.next;
      }

      if(currentListTwo!== null)
      {
        //console.log('list2 : ',currentListTwo.data)
        this.append(currentListTwo.data);
        currentListTwo=currentListTwo.next;
      }

      //console.log(this.toString())
    }
    return this;
  }

}

module.exports = linkedlist;
