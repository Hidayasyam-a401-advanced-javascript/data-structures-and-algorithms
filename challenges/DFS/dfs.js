'use strict';
let Graph = require('../graph/graph.js').Graph;
class Depthfirst extends Graph {
  constructor() {
    super();
  }
  dfs(node) {
    if (node.value == null || node == undefined) {
      return 'wrong input';
    }
    let arr = [];
    let complete = [];
    arr.push(node);
    // complete.push(node.value)
    // let current;
    while (arr.length > 0) {
      let current = arr.pop();
      // console.log('cc',current)
      complete.push(current.value);
      let ni = this.GetNeighbours(current);
      for (let k of ni) {
        // console.log('k', k.vertex);
        if (!arr.includes(k.vertex))
          arr.push(k.vertex);
      }
      console.log(arr);
    }
    return complete;
  }
}
module.exports = Depthfirst;'use strict';
