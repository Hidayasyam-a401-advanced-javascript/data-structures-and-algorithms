'use strict';
const HashTable = require('../HashTable/hashtable');

function repeated_word(str){
    let ht = new HashTable(20);
  //console.log(str.split(' '));
  let arr = str.split(' ');
  var maxWord;
  for(let i = 0;i <= arr.length;i++){
    if(ht.contains(arr[i].toUpperCase())){
      maxWord = arr[i];
      break;
    }else{
      ht.add(arr[i].toUpperCase(),1);
    }
  }
  return maxWord;
}
module.exports = repeated_word;