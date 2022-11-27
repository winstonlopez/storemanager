'use strict'


centerContainer.addEventListener('click', function(event){
    if(!event.target.closest('span.menu, span.menu account'))return;    //if not on menu, do nothing

    let elem = event.target.closest(`span.menu, span.menu account`).querySelector('span.drop-down');
        elem.hidden = !elem.hidden;
})