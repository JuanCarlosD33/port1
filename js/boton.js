/*window.onload = iniciar;

function iniciar(){

    var a = document.getElementById("btn");
        a.addEventListener("click", agregar);
        b = document.getElementById("cls");
        b.addEventListener("click", limpiar);

    mostrar();
}

function limpiar(){

    localStorage.clear();
}

function agregar(){

    var a = document.getElementById("nota").value,
        b = [];

    if (localStorage.b) {

        b = JSON.parse(localStorage.b);
        }
    
    b.push(a);

    localStorage.b = JSON.stringify(b);

    mostrar();
}

function mostrar(){

    var a = document.getElementById("lista");
        arre = [];
        html = "";

    if (localStorage.b) {

        arre = JSON.parse(localStorage.b);
        }

    for (let index of arre) {
        html += index + "<br/>";
    }
    
    a.innerHTML = html;
}*/

setInterval(() => {
    let fecha = new Date();
    let reloj = document.getElementById("rel");
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();

    if (hora > 12) {
        hora -= 12;
    }

    if (seg < 10) {
        seg = "0" + seg ;
    }

    reloj.innerHTML = `${hora}:${min}:${seg}`;

}, 1000)