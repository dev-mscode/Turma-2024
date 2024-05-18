
// para fazer os links aparecer e sumir clicando no icone de menu quando for para mobile
const botao = document.querySelector("#icon-mobile");
const menuOpen = document.getElementById("icon-open");
const menuClose = document.getElementById("icon-close");
const link = document.getElementById("link");
let menu = false;

    botao.addEventListener("click", () => {
        if (!menu) {
            link.style.display = "block";
            menuOpen.style.display = "none";
            menuClose.style.display = "block";
            menu = true;
        } else {
            link.style.display = "none";
            menuOpen.style.display = "block";
            menuClose.style.display = "none";
            menu = false;
        }
    });


    //faz com que os links do collections apareça e desapareça

   document.querySelector(".dropdown-toggle").addEventListener("click", ()=>{

    const dropdownMenu = document.querySelector(".dropdown-menu")
        const dropdownLinks = document.querySelector(".dropdown-links")

        
        dropdownLinks.classList.toggle("close-open")  
        dropdownMenu.classList.toggle("close-open")
    })



//faz o botão de ver mais aparecer quando o mouse entra na box da imagem

// const button = document.getElementById("comprar")
// const mainBox = document.getElementById("main-box")


// mainBox.addEventListener("mouseenter", ()=> {
//     button.style.display = "block";
// })

// mainBox.addEventListener("mouseleave", ()=> {
//     button.style.display = "none";
// })







//faz o menu de filtro aparecer e desaparecer
const menuLater = document.querySelector(".main-nav")
const closeFilter = document.getElementById("close-filter")
const openFilter = document.getElementById ("open-filter")


    openFilter.addEventListener("click", () => {
        menuLater.style.display="block"
        menuLater.style.display="grid"
        openFilter.style.display="none"
    });

    closeFilter.addEventListener("click", () => {
        menuLater.style.display="none"
        openFilter.style.display="block"
    });
