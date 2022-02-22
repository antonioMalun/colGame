const btn = document.querySelectorAll('button');

for(let i of btn){
        i.addEventListener('click', ()=>{  
                document.querySelector('body').style.backgroundColor = i.style.backgroundColor ;
        });
 }