class Node {

    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class linkedlist {
    constructor() {
      this.head = null;
    }
  
    insertFirst(node) {
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
    includes(val) {
      let current = this.head;
      while (current !== null) {
        let kayes=Object.keys(current.data);
       // console.log('kayes',kayes)
        if (kayes[0] === val)
          return true;
        current = current.next;
      }
      return false;
    }
  
  
  
    toString() {
      let current = this.head;
      let content = "";
      while (current !== null) {
        content = content + `{ ${current.data} } -> `
        current = current.next;
      }
      return content + 'NULL'
    }
  
  
  }
  
  
  class HashTable {
    constructor(size) {
      this.size = size;
      this.entries = new Array(size); // bucket
    }
  
    GetHash(key) {
      let keyarr = key.split("")
      let sum = 0;
      let mutl = keyarr.reduce((ac, value) => {
        return ac + value.charCodeAt(0);
      }, 0) * 599
      return (mutl % this.size);
    }
  
    add(key, value) {
  
      let index=this.GetHash(key);
  
      if(!this.entries[index])
        {
          this.entries[index]=new linkedlist();
        }
    
      let obj={[key]:value}
      this.entries[index].append(obj);
  
  
    }
  
    get(key){
  
      let index=this.GetHash(key);
      if(this.contains(key))
      {
           console.log('this.entries[index] : ',this.entries[index]);
           let current=this.entries[index].head;
           while(current!==null)
            {
  
              let currentKey=Object.keys(current.data);
               if(currentKey[0]===key)
                 return Object.values(current.data);
               current=current.next
            }
      }
      else 
        return null;
    }
  
  contains(key){
  
     let index=this.GetHash(key);
    // console.log(index)
     if(this.entries[index])
       return this.entries[index].includes(key); 
      return false
     //console.log(flag);
  
     
    } 
  }

  module.exports=HashTable;