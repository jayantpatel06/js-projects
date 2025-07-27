const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(item){
    item.addEventListener('click', (e)=>{
        if(e.target.id==='grey'){
            body.style.backgroundColor = 'grey';
        }
        else if(e.target.id ==='blue'){
            body.style.backgroundColor ='blue';
        }
        else if(e.target.id==='yellow'){
            body.style.backgroundColor = 'yellow';
        }
        else{
            body.style.backgroundColor = 'white';
        }
    })
})
