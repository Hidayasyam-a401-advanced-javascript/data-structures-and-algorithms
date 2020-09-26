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
    return this.top.data;
         
  }

  pop(){
      
    let temp =this.top;
    this.top=temp.next;
    this.length--;
    return temp;

  }
  peek(){

    return this.isEmpty()? 'Stack isEmpty .. !' : this.top.data;

  }
  isEmpty(){

    return this.top ? false : true ;
  }

}

class PseudoQueue{

  constructor(){
    this.rear=new Stack();
    this.front=new Stack();
  }

  enqueue(data){
   
    this.rear.push(data);
    return this.rear;

  }
  dequeue (){
    let popdata=0;
    if(this.rear.length===1)
    {
      this.rear.pop();
    }
    else {
      while(this.rear.length!==0)
      {
        let temp=this.rear.pop();
        this.front.push(temp.data); 
      }
      popdata= this.front.pop().data;
      while(this.front.length!==0)
      {
        let temp=this.front.pop();
        this.rear.push(temp);

      }

    }
    return popdata;
  }
}
module.exports = PseudoQueue;
