const psqueue = require('../challenges/queueWithStacks/queue-with-stacks');



describe('Psqueue ..   ', () => {
  test('push one item ', () => {
    let ps=new psqueue();
   
    expect( ps.enqueue(1).top.data).toEqual(1);

  
  });

  test('push multiple item ', () => {
    let ps=new psqueue();
    ps.enqueue(1);
    ps.enqueue(2);
    ps.enqueue(3);
    expect(ps.rear.length).toEqual(3);

  
  });


  test('pop one item ', () => {
    let ps=new psqueue();
    ps.enqueue(1);
    ps.enqueue(2);
    ps.enqueue(3);
        
    expect(ps.dequeue()).toEqual(1);

  
  });
});
