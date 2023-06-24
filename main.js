'use strict'


centerContainer.addEventListener('mouseover', function(event){
    if(!event.target.closest('span.menu, span.menu account'))return;    //if not on menu, do nothing

    let elem = event.target.closest(`span.menu, span.menu account`).querySelector('span.drop-down');

        elem.hidden = false;
})

centerContainer.addEventListener(`mouseout`, (event)=>{
    let elem = event.target.closest(`span.menu`).querySelector(`span.drop-down`);
    console.log(elem);

    elem.hidden = true;
    
})

function letter(str){
    let char = str.charCodeAt(0);
    
    for(let i = 0; i < str.length; i++){
        if(!(str.charCodeAt(i) == (char + i))){
            return String.fromCharCode(char + i).concat(letter(str.slice(i)));
            
        }
    }
    return ``;
}
console.log(letter(`acdeg`));

function destroyer(arr, ...items){

    return arr.filter(item => !items.includes(item))
}

console.log(destroyer([1,2,3,4,5,6], 1,3,5));