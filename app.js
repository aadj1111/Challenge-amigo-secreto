let amigos = [];

function agregarAmigo(){
    //Me permite obtener los valores de la caja.
    let amigoIngresado = document.getElementById('amigo').value;

    if(amigoIngresado === ""){
        alert("Por favor, ingrese un nombre válido");
    }else{
        amigos.push(amigoIngresado);
        document.querySelector("#amigo").value = "";
        asignarLista();
    }
    limpiarCaja();
}

function limpiarCaja(){
    //Me permite limpiar la caja.
    document.getElementById('amigo').value = '';
}

function asignarLista(){
    /*Me permite asignar la lista con los nombres dentro del array.
    El for me ayuda a recorrer todos los elementos del arreglo*/
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const element = amigos[i];
    
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}

function sortearAmigo() {
    /*Me permite hacer el sorteo aleatorio de nuestro amigo secreto.
    Así como también, mostrar el resultado obtenido*/
    let amigosTotales = amigos.length;
    if (amigosTotales === 0) {
      alert("Por favor, ingrese un nombre para comenzar");
    } else {
      let indiceAmigo = Math.floor(Math.random() * amigosTotales);
      let resultadoHTML = document.querySelector("#resultado");
      listaAmigos.innerHTML = "";
      resultadoHTML.innerHTML = `El amigo secreto es: ${amigos[indiceAmigo]}`;
    }
}


