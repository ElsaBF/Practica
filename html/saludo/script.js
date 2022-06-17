console.log("Hola hola hola hola hola");

setInterval( cambiarSaludo, 2000);

function cambiarSaludo(){
let frase = document.getElementsByTagName("h3")[0].innerHTML;

    if (document.getElementsByTagName("h3")[0].innerHTML == "Awesome!"){
        document.getElementsByTagName("h3")[0].innerHTML = "Nueva frase";
    }

    else {
        document.getElementsByTagName("h3")[0].innerHTML = "Awesome!";
    }
    console.log("frase :" + frase)
}