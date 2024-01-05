let yn= prompt ("Bienvenido al cuestionario sobre Lionel Messi. Estas listo?");

let respuesta= prompt ("Ingrese el nombre del futbolista Messi").toLowerCase();
if (respuesta =="lionel") {
    alert ("Correcto, Lionel Andres Messi")    
} else {
    alert ("Respuesta Incorrecta")
}

let pregunta = prompt("De que nacionalidad es Messi?");
while (pregunta !== "argentino" && pregunta !== "ARGENTINO" && pregunta !== "Argentino") {
    alert ("Respuesta Incorrecta");
    pregunta = prompt ("De que nacionalidad es Messi?");
}
alert ("Respuesta correcta");

