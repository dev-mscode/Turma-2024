

document.querySelector('.dropdown-toggle').addEventListener('click',()=>{

 
  let menu =  document.querySelector('.dropdown-menu')
 
  menu.classList.toggle('flex')

  

 
   
  
})



// partew do menu 

document.querySelector('.menu-mobile').addEventListener("click",abrirmenu)

let menu = document.querySelector("nav") ; 
let fechar = document.querySelector('.menu-closer') ;
let abrir = document.querySelector('.menu-mobile')

function abrirmenu(){

  let open = false ; 

  if(!open){

    
      abrir.style.display = 'none' ; 
        fechar.style.display = 'flex'
        menu.style.display = "flex"

      
    
      
      fechar.addEventListener("click", fecharMenu)
     

   
  }


  

  
  
}

function fecharMenu(){

  abrir.style.display = 'block' ;
  menu.style.display = "none" 
  fechar.style.display = 'none'
}





    





  

// parte do carrosel 



//pegar a quyantidader de fotos 

let fotosTotal = document.querySelectorAll('.slide-img').length

// fazer o calc para ter uma foto so na tela 
document.querySelector('.slider-width').style.width = `calc(100vw * ${fotosTotal})`

let slide = 0 ; 

document.querySelector('.banner-poiter').addEventListener('click', goNext)

  function  goNext(){

    slide++
    if(slide > (fotosTotal - 1)){
        slide = 0 
     
    }
    updatemargin()
  }
 
 
 function updatemargin(){

  let larguraDaTela = document.querySelector('.banner-slider').clientWidth ; 

  let newMargin = (slide * larguraDaTela ) ; 

  document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`

 }



setInterval(goNext,5000)

