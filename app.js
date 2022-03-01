const colors ={
        1:'fuchsia',
        2:'royalblue',
        3:'greenyellow',
        4:'cyan',
        5:'purple',
        6:'coral' };

const btn = document.querySelectorAll('button');
let chance = 3;
let res =false;
let index  = Math.floor(Math.random()*6 )+1;

for(let i of btn){
        
        i.addEventListener('click', ()=>{  
        document.querySelector('body').style.backgroundColor = i.style.backgroundColor ;
        while(res  || chance >= 0 ){
                if(colors[index] !== i.style.backgroundColor)
                        alert(`Try again. You have ${chance--} `)
                else if(colors[index] === i.style.backgroundColor)
                        alert(`BRAVO!! That's my color`)
                        res = true;
                        return process.abort();
        
        }


        });
               
        

 }