'use strict';

class Node {
  constructor(data){
    this.data=data;
    this.next=null;
  }
}

class Stack {

  constructor(){
    this.top=null;
    this.length=0;
  }


  push(data){

    let node=new Node(data);
    node.next=this.top;
    this.top=node;
    this.length++;
  }

  pop(){
    if(this.isEmpty())
      return 'Stack isEmpty ..!!';
    else{
      let temp =this.top;
      this.top=temp.next;
      this.length--;
      return temp.data;
    }
     

  }
  peek(){

    return this.isEmpty()? 'Stack isEmpty .. !' : this.top.data;

  }
  isEmpty(){

    return this.top ? false : true ;
  }

}

class Queue {
  constructor(){
    this.rear=null;
    this.front=null;
    this.length=0;
  }

  enqueue(data){

    let node=new Node(data);
    if(this.isEmpty())
      this.rear=this.front=node;
    else{
      this.rear.next=node;
      this.rear=node;
    }
    this.length++;

  }
  dequeue (){
    if(this.isEmpty())
      return 'Queue isEmpty ..!!';
    else if(this.length===1)
    {
      this.front=null;
      this.rear=null;
    }
    else{
      let temp =this.front;
      this.front=this.front.next;
      temp.next=null;
      this.length--;
    }
  }

  peek(){

    return this.isEmpty()? 'Queue isEmpty .. !' : this.front.data;

  }

  isEmpty(){

    return this.front ? false : true ;
  }

}
module.exports = { stack: Stack, queue: Queue };
