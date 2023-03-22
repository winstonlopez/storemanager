'use strict'


centerContainer.addEventListener('mouseover', function(event){
    if(!event.target.closest('span.menu, span.menu account'))return;    //if not on menu, do nothing

    let elem = event.target.closest(`span.menu, span.menu account`).querySelector('span.drop-down');
        elem.hidden = !elem.hidden;
})

Array.prototype.myMap = function(callback){

  const newArray = [];

  this.forEach((item, index, arr)=>newArray.push(callback(item,index,arr)));

  return newArray;

}
let arr = [1,2,3,4,5,9];


console.log(arr.myMap(item => item * item));

function factorial(num){
  if(num <= 2){
    return num;
  }else{
    return num * factorial(num -1);
  }
}
console.log(factorial(2));