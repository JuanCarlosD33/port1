window.onload = carga();

function carga() {
    let a = document.getElementById("btn"),
        z = document.getElementById("btn2");

    a.addEventListener("click", function impri() {
        let b = document.getElementById("tex").value,
            c = document.getElementById("pru");

    });

    z.addEventListener("click", function(){
        let f = document.getElementById("caja"),
            g = document.getElementsByClassName("parrafo"),
            anc = document.getElementsByClassName("med");

        f.style.background = "black";
        g[1].style.background = "yellow";
        anc[0].innerHTML = "El ancho es" + screen.width;
        anc[1].innerHTML = "El alto es" + screen.height;
    })
    
}

