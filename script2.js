//Pagina 2
//Menu Temas

const MenuTema1b = document.getElementById("miMenuTema1b");
const MenuTema2b = document.getElementById("miMenuTema2b");
const MenuTema1t = document.getElementById("miMenuTema1t");
const MenuTema2t = document.getElementById("miMenuTema2t");

// agrega el evento de clic al botón
MenuTema1b.addEventListener("click", MenuTema1);
MenuTema2b.addEventListener("click", MenuTema2);

// define la función que se ejecutará cuando el botón sea clickeado
function MenuTema1() { 
    MenuTema1t.className = "mostrar8";
    MenuTema2t.className = "esconder9";

    MenuTema1b.className = "square-buttona";
    MenuTema2b.className = "square-button";
}
function MenuTema2() { 

    MenuTema1t.className = "esconder8";
    MenuTema2t.className = "mostrar9";

    MenuTema1b.className = "square-button";
    MenuTema2b.className = "square-buttona";
}


//Menu REA

const MenuRea1b = document.getElementById("MenuRea1b");
const MenuRea2b = document.getElementById("MenuRea2b");
const MenuRea1t = document.getElementById("MenuRea1t");
const MenuRea2t = document.getElementById("MenuRea2t");

function MenuRea1() { 
    MenuRea1t.className = "mostrar8";
    MenuRea2t.className = "esconder9";

    MenuRea1b.className = "boton2v";
    MenuRea2b.className = "boton2";
}
function MenuRea2() { 
    MenuRea1t.className = "esconder8";
    MenuRea2t.className = "mostrar9";

    MenuRea1b.className = "boton2";
    MenuRea2b.className = "boton2v";
}

MenuRea1b.addEventListener("click", MenuRea1);
MenuRea2b.addEventListener("click", MenuRea2);