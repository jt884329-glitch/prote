

const lista =
document.getElementById("lista");

let productos =
JSON.parse(
localStorage.getItem("productos")
) || {};

mostrarProductos();

document
.getElementById("guardar")
.addEventListener("click", guardarProducto);

function guardarProducto(){

    const producto =
    document
    .getElementById("producto")
    .value
    .toLowerCase();

    const precio =
    Number(
        document
        .getElementById("precio")
        .value
    );

    if(!producto || !precio){
        alert("Completa todos los campos");
        return;
    }

    productos[producto] = {
        precio: precio
    };

    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );
    alert("Guardado: " + JSON.stringify(productos));

    mostrarProductos();

    document.getElementById("producto").value="";
    document.getElementById("precio").value="";
}

function mostrarProductos(){

    lista.innerHTML="";

    for(let nombre in productos){

        lista.innerHTML += `
        <li>
            ${nombre} - $${productos[nombre].precio}
        </li>
        `;
    }
}