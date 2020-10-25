'use strict';

function leftJOIN(leftTable, rightTable) {

  console.log(leftTable.entries);
  let keys = [];
  let entry = leftTable.entries;
  let arr = [];
 
  for (let i = 0; i < entry.length; i++) {
    if (entry[i]) {
      let current = entry[i].head;
      while (current !== null) {
        let currentKey = Object.keys(current.data);
        arr.push(currentKey[0]);
        current = current.next;
      }
    }

  }
  for(let i=0;i<arr.length;i++){
    let temp=[];
    let leftvalue=leftTable.get(arr[i]);
    let rightvalue=rightTable.get(arr[i]);
    let result = rightvalue ? rightvalue[0] : null;
    console.log('leftvalue : ',leftvalue[0],' rightvalue : ',
      result);
    temp.push(arr[i]);
    temp.push(leftvalue[0]);
    temp.push(result);
    keys.push(temp);


  }

  return keys.length;


}

module.exports=leftJOIN;
