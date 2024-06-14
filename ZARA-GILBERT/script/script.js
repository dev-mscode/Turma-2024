const menuBtn = document.getElementById('botao-aparecer-menu')
const menu = document.getElementById('menu-lateral')

menuBtn.addEventListener('click', function() {

  if (menu.style.left === '-200px') {
    menu.style.left = '0'
    menuBtn.classList.remove("fa-bars")
    menuBtn.classList.add("fa-times")
  }
    
  else{
    menu.style.left = '-200px'
    menuBtn.classList.add("fa-bars")
    menuBtn.classList.remove("fa-times")
  }
})