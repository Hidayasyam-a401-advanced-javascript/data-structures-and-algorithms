const Stack = require('../challenges/stacksAndQueues/stacks-and-queues.js').stack;
const Queue = require('../challenges/stacksAndQueues/stacks-and-queues.js').queue;



describe('Stack ..   ', () => {
    test('push one item ', () => {
     let s1=new Stack;
     s1.push(1);
     expect(s1.peek()).toEqual(1);

  
    });
 });

 describe('Stack ..   ', () => {
    test('push multiple item ', () => {
        let s1=new Stack()
        s1.push(1);
        s1.push(2);
        s1.push(3);
     expect(s1.length).toEqual(3);

  
    });
 });

 describe('Stack ..   ', () => {
    test('pop one item ', () => {
        let s1=new Stack()
        s1.push(1);
        s1.push(2);
        s1.push(3);
        
     expect(s1.pop()).toEqual(3);

  
    });
 });
 describe('Stack ..   ', () => {
    test('pop empty Stack ', () => {
        let s1=new Stack()
     expect(s1.pop()).toEqual("Stack isEmpty ..!!");

  
    });
 });
 describe('Stack ..   ', () => {
    test('instantiate an empty stack ', () => {
        let s1=new Stack()
     expect(s1.peek()).toEqual("Stack isEmpty .. !");

  
    });
 });

 describe('Stack ..   ', () => {
    test('peek the next item on the stack ', () => {
     let s1=new Stack;
     s1.push(1);
     s1.push(2);
     s1.push(3);
     s1.pop()
     expect(s1.peek()).toEqual(2);

  
    });
 });



 describe('Stack ..   ', () => {
    test('expected peek value ', () => {
        let s1=new Stack;
        s1.push(1);
        s1.push(2);
        s1.push(3);
        expect(s1.peek()).toEqual(3);
  
    });
 });



 describe('Queue ..   ', () => {
    test('enqueue one item ', () => {
     let q1=new Queue;
     q1.enqueue(1);
     expect(q1.peek()).toEqual(1);

  
    });
 });


 describe('Queue ..   ', () => {
    test('enqueue multiple item ', () => {
        let q1=new Queue()
        q1.enqueue(1);
        q1.enqueue(2);
        q1.enqueue(3);
     expect(q1.length).toEqual(3);

  
    });

});

describe('Queue ..   ', () => {
    test('dequeue one item ', () => {
        let q1=new Queue()
        q1.enqueue(1);
        q1.enqueue(2);
        q1.enqueue(3);
        q1.dequeue();
     expect(q1.length).toEqual(2);

  
    });
 });


 describe('Queue ..   ', () => {
    test('dequeue empty Queue ', () => {
        let q1=new Queue()
     expect(q1.dequeue()).toEqual("Queue isEmpty ..!!");

  
    });
 });

 describe('Queue ..   ', () => {
    test('instantiate an empty Queue ', () => {
        let q1=new Queue()
     expect(q1.peek()).toEqual("Queue isEmpty .. !");

  
    });
 });

 describe('Queue ..   ', () => {
    test('peek the next item on the Queue ', () => {
     let q1=new Queue;
     q1.enqueue(1);
     q1.enqueue(2);
     q1.enqueue(3);
     q1.dequeue();
     expect(q1.peek()).toEqual(2);

  
    });
 });


 describe('Queue ..   ', () => {
    test('expected peek value ', () => {
     let q1=new Queue;
     q1.enqueue(1);
     q1.enqueue(2);
     q1.enqueue(3);
     expect(q1.peek()).toEqual(1);

  
    });
 });

