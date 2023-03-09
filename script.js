
//Menu Interactivo

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");


const btn1a = document.getElementById("btn1a");
const btn2a = document.getElementById("btn2a");
const btn3a = document.getElementById("btn3a");
const btn4a = document.getElementById("btn4a");
const btn5a = document.getElementById("btn5a");
const btn6a = document.getElementById("btn6a");
const btn7a = document.getElementById("btn7a");

function Menu1() { 
    /* $( ".text_1" ).css('font-size', '100px'); */
    btn1.className = "mostrar1";
    btn2.className = "esconder2";
    btn3.className = "esconder3";
    btn4.className = "esconder4";
    btn5.className = "esconder5";
    btn6.className = "esconder6";
    btn7.className = "esconder7";
    
    btn1a.className = "boton1v";
    btn2a.className = "boton1";
    btn3a.className = "boton1";
    btn4a.className = "boton1";
    btn5a.className = "boton1";
    btn6a.className = "boton1";
    btn7a.className = "boton1";
    
}
function Menu2() { 
     
    btn1.className = "esconder1";
    btn2.className = "mostrar2";
    btn3.className = "esconder3";
    btn4.className = "esconder4";
    btn5.className = "esconder5";
    btn6.className = "esconder6";
    btn7.className = "esconder7";

    btn1a.className = "boton1";
    btn2a.className = "boton1v";
    btn3a.className = "boton1";
    btn4a.className = "boton1";
    btn5a.className = "boton1";
    btn6a.className = "boton1";
    btn7a.className = "boton1";
}
function Menu3() { 
     
    btn1.className = "esconder1";
    btn2.className = "esconder2";
    btn3.className = "mostrar3";
    btn4.className = "esconder4";
    btn5.className = "esconder5";
    btn6.className = "esconder6";
    btn7.className = "esconder7";

    btn1a.className = "boton1";
    btn2a.className = "boton1";
    btn3a.className = "boton1v";
    btn4a.className = "boton1";
    btn5a.className = "boton1";
    btn6a.className = "boton1";
    btn7a.className = "boton1";
}
function Menu4() { 
     
    btn1.className = "esconder1";
    btn2.className = "esconder2";
    btn3.className = "esconder3";
    btn4.className = "mostrar4";
    btn5.className = "esconder5";
    btn6.className = "esconder6";
    btn7.className = "esconder7";

    btn1a.className = "boton1";
    btn2a.className = "boton1";
    btn3a.className = "boton1";
    btn4a.className = "boton1v";
    btn5a.className = "boton1";
    btn6a.className = "boton1";
    btn7a.className = "boton1";
}
function Menu5() { 
     
    btn1.className = "esconder1";
    btn2.className = "esconder2";
    btn3.className = "esconder3";
    btn4.className = "esconder4";
    btn5.className = "mostrar5";
    btn6.className = "esconder6";
    btn7.className = "esconder7";

    btn1a.className = "boton1";
    btn2a.className = "boton1";
    btn3a.className = "boton1";
    btn4a.className = "boton1";
    btn5a.className = "boton1v";
    btn6a.className = "boton1";
    btn7a.className = "boton1";
}
function Menu6() { 
     
    btn1.className = "esconder1";
    btn2.className = "esconder2";
    btn3.className = "esconder3";
    btn4.className = "esconder4";
    btn5.className = "esconder5";
    btn6.className = "mostrar6";
    btn7.className = "esconder7";

    btn1a.className = "boton1";
    btn2a.className = "boton1";
    btn3a.className = "boton1";
    btn4a.className = "boton1";
    btn5a.className = "boton1";
    btn6a.className = "boton1v";
    btn7a.className = "boton1";
}
function Menu7() { 
     
    btn1.className = "esconder1";
    btn2.className = "esconder2";
    btn3.className = "esconder3";
    btn4.className = "esconder4";
    btn5.className = "esconder5";
    btn6.className = "esconder6";
    btn7.className = "mostrar7";

    btn1a.className = "boton1";
    btn2a.className = "boton1";
    btn3a.className = "boton1";
    btn4a.className = "boton1";
    btn5a.className = "boton1";
    btn6a.className = "boton1";
    btn7a.className = "boton1v";
}

btn1a.addEventListener("click", Menu1);
btn2a.addEventListener("click", Menu2);
btn3a.addEventListener("click", Menu3);
btn4a.addEventListener("click", Menu4);
btn5a.addEventListener("click", Menu5);
btn6a.addEventListener("click", Menu6);
btn7a.addEventListener("click", Menu7);


