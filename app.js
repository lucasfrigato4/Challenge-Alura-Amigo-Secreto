var amigos = [];

function agregarAmigos() {
    let input = document.getElementById('amigo');
    let nome = input.value;


    if (nome != '') {
        amigos.push(nome);
        console.log(amigos);
        input.value = '';
        mostrarNomesNaTela();

    } else {
        alert('Adicione um nome válido');
    }
}

function mostrarNomesNaTela() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(function(nome) {
        lista.innerHTML += `<li>${nome}</li>`;
    });
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    let nomeAleatorio = amigos[indiceAleatorio];
    let nomeQueaparece = document.getElementById('listaAmigos');
    
    
    if (amigos.length == 0) {
        alert ('adicione amigos antes de sortear');
    } else {
        nomeQueaparece.innerHTML = `<li>${nomeAleatorio}</li>`;
    }
}
