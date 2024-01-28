// OBJETO
  class Jugador {
    constructor(nombre, edad, golesCarrera, clubActual,jugadorContinente) {
      this.nombre = nombre;
      this.edad = edad;
      this.golesCarrera = golesCarrera;
      this.clubActual = clubActual;
      this.jugadorContinente = jugadorContinente;
    }
  }
  // ARRAYS
  const jugadores = [
    new Jugador("Messi", 36, 821, "Inter Miami","Sudamericano"),
    new Jugador("Ronaldo", 38, 873, "Al Nassr","Europeo"),
    new Jugador("Julian Alvarez", 23, 91, "Manchester City","Sudamericano"),
    new Jugador("Haaland", 23, 200, "Manchester City","Europeo"),
  ];
  // PROMPTS

  //NACIONALIDAD
let nacionalidad = prompt ("FIltre por nacionalidad de jugador. Europeo o Sudamericano?")
while(nacionalidad !== null){
let jugadorFiltrado = jugadores.filter((item)=> item.jugadorContinente.toLowerCase() === nacionalidad.toLocaleLowerCase());
if (jugadorFiltrado){
jugadorFiltrado.forEach((item) =>{
    alert(`Opciones de jugadores: ${item.nombre}`);
});
} else {
    alert(`No hay jugadores con la nacionalidad ${nacionalidad}.`);
  };
  nacionalidad = prompt ("FIltre por nacionalidad de jugador. Europeo o Sudamericano?");
};

  //JUGADORES
  let buscarNombre = prompt ( "Ingresar jugador");
  while (buscarNombre !== null){
    let nombreEncontrado = jugadores.find((jugador) => jugador.nombre.toLowerCase() === buscarNombre.toLowerCase());
  if (nombreEncontrado){
    alert("Jugador encontrado: " +
    "Nombre: " + nombreEncontrado.nombre +
    ", Edad: " + nombreEncontrado.edad +
    ", Goles en carrera: " + nombreEncontrado.golesCarrera +
    ", Club actual: " + nombreEncontrado.clubActual);
} else {
  alert("Jugador no encontrado.");
}
buscarNombre = prompt("Ingresar otro nombre o cancelar para salir");
}
alert("Búsqueda cancelada.");