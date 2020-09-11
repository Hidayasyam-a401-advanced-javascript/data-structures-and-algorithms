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

  insert(val) {
    let node = new Node(val);
    //console.log(node)
    if (this.head === null) {
      this.head = node;
    }
    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
        //console.log(current.data)
      }
      current.next = node;
      //console.log(current.data)
    }


  }
  includes(val){
      
    let current=this.head;
    while(current !==null){
     
      //console.log(count)
      if(current.data===val )
          return true;
      
      current=current.next
    }
    return false
  
}
  toString() {
    let current = this.head;
    let content="";
    
    while (current !== null) {
      //console.log(current.data, "->");
      content=content+`{ ${current.data} } -> `
      current = current.next;
    }
    return content+'NULL'
  }

}

let l1 = new linkedlist();
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