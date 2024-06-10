
let correo;
let pass;
function registrar() {


    correo = document.getElementById("correo").value;
    pass = document.getElementById("contra").value;
    window.alert("Su correo es: " + correo);


}

function iniciar() {
    let correo1 = document.getElementById("correo1").value;
    let pass1 = document.getElementById("contra1").value;

    if (correo1 == correo && pass == pass1) {
        window.alert("INICIO DE SECION CORRECTO");
        contador = 1;
        location.href = "index.html";
    } else {
        window.alert("INGRESO INCORRECTO");
    }
}

document.addEventListener('keyup', e => {
    if (e.target.matches('#search')) {
        document.querySelectorAll('.receta').forEach(fruta => {
            fruta.textContent.toLowerCase().includes(e.target.value)
                ? fruta.classList.remove('filtro')
                : fruta.classList.add('filtro')
        })
    }
})