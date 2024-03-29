let boton = document.getElementById("boton");
let contenedor = document.getElementById("contenedor");
let datosMostrados = false;
/* FETCH EN DATA.JSON */
const datos = () => {
  datosMostrados ? (
      contenedor.innerHTML = "",
      datosMostrados = false
  ) : (
    fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            let div = document.createElement("div");
            div.innerHTML = `<h2>Nombre: ${data[0].nombre}</h2>
                            <br>
                            <h3> Descripcion: ${data[0].descripcion}</h3>`; 
                            div.classList.add("centrado");
            contenedor.appendChild(div);
            datosMostrados = true;
        }, 1000);
    })
    .catch(error => console.error('Error fetching data:', error))
  );
};
boton.addEventListener("click", datos)
/* FORM, CONFIRMACION DE ALUMNO */
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    let nombre = document.getElementById("nombre").value.toLowerCase();
    localStorage.setItem("nombre", nombre)
    nombre === "matias ary veron"?
    /* SweetAlert */
    Swal.fire({
        title: "Aprobo el curso de Javascript",
        text: (`Bienvenido ${nombre}`),
        icon: "success"
      }):
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: (`${nombre} no es valido`)
      });
    
});
