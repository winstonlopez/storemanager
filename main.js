'use strict'

//----------------------------mousover on menu element----------------------------------------------//
/* note:: everytime the pointer moves to a different element a mouseover/mouseout triggers, it doesnt matter if they are both inside the parent element that has event */

centerContainer.addEventListener('mouseover', function(event){
    console.log(`mouseover triggered`);
    if(!event.target.closest('span.menu'))return;    //if not on menu, do nothing

    

    let elem = event.target.closest(`span.menu, span.menu account`).querySelector('span.drop-down');

        elem.hidden = false;
})

centerContainer.addEventListener(`mouseout`, (event)=>{
    if(event.relatedTarget){    //skip this part if the pointer went outside window
    if(event.relatedTarget.closest(`span.menu`)){return};   //if you are still inside span.menu do nothing
        }
    console.log(`mouseout triggered`);
    
    let elem = event.target.closest(`span.menu`).querySelector(`span.drop-down`);
     
    elem.hidden = true;

     console.log(`hide occured!`);
    
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
console.log(destroyer([1,2,3,4,5],1,2,3));