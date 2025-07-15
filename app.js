const formulario= document.querySelector(".form-create");
let cont = 1;
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += `<div id="${cont}" class="publicacion">
            <p>id:${cont}</p>
            <p>${descripcion}</p>
            <button id="editar" onclick="editar"(this)>editar</button>
            <button id="eliminar" onclick="eliminar"(this)>eliminar</button>
        </div>`;
    cont++;
});
const eliminar = document.querySelector("#eliminar");
eliminar.adddEventListener("click", (e)=>{
    console.log("se presiono click en el boton eliminar")
    });
function editar(e){

}
function eliminar(e){
    e.parentElement.remove();
}