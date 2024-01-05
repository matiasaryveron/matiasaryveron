let nombre= prompt("Ingrese nombre")
alert (`Hola ${nombre} bienvenido al cuestionario sobre Lionel Messi`)

let yn= prompt ("Estas listo? Si/No").toLowerCase();
while (yn !="si"){
alert("Adios");
yn= prompt ("Bienvenido al cuestionario sobre Lionel Messi. Estas listo?").toLowerCase();
}
alert ("Comencemos!")

let respuesta= prompt ("Ingrese el nombre del futbolista Messi").toLowerCase();
if (respuesta ==="lionel" && respuesta !="") {
    alert (`Correcto ${nombre} ! La respuesta es Lionel Andres Messi`)    
} else {
    alert (`Respuesta Incorrecta ${nombre} =( Vuelve a intentarlo`);
}

let pregunta = prompt("De que nacionalidad es Messi?");
while (pregunta !== "argentino" && pregunta !== "ARGENTINO" && pregunta !== "Argentino") {
    alert ("Respuesta Incorrecta");
    pregunta = prompt ("De que nacionalidad es Messi?");
}
alert (`Respuesta correcta ${nombre}`);

const despedida = () => alert(`Gracias por participar, ${nombre}. Hasta luego!`);
despedida()