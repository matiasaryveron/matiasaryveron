let boton = document.getElementById("boton");
let contenedor = document.getElementById("contenedor");
let datosMostrados = false;

const datos = () => {
    if (datosMostrados) {
    contenedor.innerHTML="";
    datosMostrados = false;
} else {
let div = document.createElement ("div");
div.innerHTML=`
<h2>Nombre: coderhouse</h2>
`;
contenedor.appendChild(div);
datosMostrados = true;
}};
boton.addEventListener("click", datos)

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    let usuario = document.getElementById("usuario").value.toLowerCase();;
    usuario === "Coderhouse"? alert(`Bienvenido ${usuario}`):
        alert (`${usuario} no es valido`)
});
