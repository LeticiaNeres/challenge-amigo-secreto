//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome !== "") {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        atualizarLista();
    } else {
        alert("Por favor, insira um nome válido.");
    }
};

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}    

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    alert("O amigo sorteado é: " + amigoSorteado);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Amigo sorteado: " + amigoSorteado;

}