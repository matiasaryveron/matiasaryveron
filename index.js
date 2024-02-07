let boton = document.getElementById("boton");
let contenedor = document.getElementById("contenedor")
let datosMostrados = false;

const datos = () => {
    if (datosMostrados) {
    contenedor.innerHTML="";
    datosMostrados = false;
} else {
let div = document.createElement ("div");
div.innerHTML=`
<h2>Nombre: coder</h2>
<h2>Apellido: house</h2>
`;
contenedor.appendChild(div);
datosMostrados = true;
}};
boton.addEventListener("click", datos)


