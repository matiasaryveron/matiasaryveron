// OBJETO
  class Jugador {
    constructor(nombre, edad, golesCarrera, clubActual) {
      this.nombre = nombre;
      this.edad = edad;
      this.golesCarrera = golesCarrera;
      this.clubActual = clubActual;
    }
  }
  // ARRAYS
  const jugadores = [
    new Jugador("Messi", 36, 821, "Inter Miami"),
    new Jugador("Ronaldo", 38, 873, "Al Nassr"),
    new Jugador("Julian Alvarez", 23, 91, "Manchester City"),
    new Jugador("Haaland", 23, 200, "Manchester City"),
  ];
  // PROMPTS
  let buscarNombre = prompt ( "Ingresar una opcion")
  while (buscarNombre !== null){
    let nombreEncontrado = jugadores.find(jugador => jugador.nombre.toLowerCase() === buscarNombre.toLowerCase());
  if (nombreEncontrado){
    alert("Jugador encontrado: " +
    "Nombre: " + nombreEncontrado.nombre +
    ", Edad: " + nombreEncontrado.edad +
    ", Goles en carrera: " + nombreEncontrado.golesCarrera +
    ", Club actual: " + nombreEncontrado.clubActual);
} else {
  alert("Jugador no encontrado.");
  buscarNombre = prompt("Ingresar otro nombre o cancelar para salir");
}
alert("Búsqueda cancelada.");
  }