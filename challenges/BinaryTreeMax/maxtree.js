const tree = require('../tree/tree');

class MaxTree extends tree{
  constructor(){
    super();
  }
  findmaximumvalue() {

    if (this.root === null) {
      return 'is Empty .. !';
    }
    let current = this.root;
    //console.log(current)
    while (current.right !== null) {
      //console.log(current.value)
      current = current.right;
    }
    return current.value;
    
    
  }


}

module.exports = MaxTree;