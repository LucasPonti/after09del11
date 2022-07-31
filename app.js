let formulario = document.getElementById('formulario');
let tabla = document.getElementById('tablaContent');

const datos = {
    nombre: '',
    apellido: '',
    id: ''
}

formulario.addEventListener('submit', (e) => {
    console.log(e);
    e.preventDefault();
    datos.nombre = document.getElementById("fname").value;
    datos.apellido = document.getElementById("lname").value;
    datos.id = document.getElementById("identificacion").value;
    console.log(datos);

    tabla.children[0].innerHTML += (`
    <tr>
    <td>${datos.nombre}</td>
    <td>${datos.apellido}</td>
    <td>${datos.id}</td>
    </tr>
`)
})

