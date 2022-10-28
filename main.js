let rate = document.querySelectorAll('#rate')
let submit = document.querySelector('#submit')
let done = document.querySelector('#done')
let ratte= document.querySelector('#ratte')
let front= document.querySelector('#front')
let tyend= document.querySelector('.tyend')




for (let i=0;i<rate.length;i++) {
  
  
  
    rate[i].addEventListener('click', function(){
        
ratte.innerHTML= `You selected <span> ${i+1} </span> out of 5`


  })  
  
}

submit.addEventListener('click' , function(){

    front.classList.add('none')
    front.classList.add('animate_animated')
    front.classList.add('animate__shakeX')
    tyend.classList.remove('none')
   
    
    
    })


done.addEventListener('click' , function(){
    window.reload();
    front.classList.remove('none')
    tyend.classList.add('none')

    
    
    
    })





    