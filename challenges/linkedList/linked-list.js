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

module.exports = linkedlist;
