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

let search = document.getElementById(`searchbar`);

search.addEventListener(`keypress`, (event)=>{
    alert(event.key);
})