let listaDeNomes = [];

function adicionarAmigo(){
    const idCampo = "amigo";
    nomeDoAmigo = document.getElementById(idCampo).value.trim();
    
    if (nomeDoAmigo == "") {
        alert("Por favor, insira um nome.");
    }else {
        listaDeNomes.push(nomeDoAmigo);

        atualizarListaHTML();
    }
    
    limparCampoPorId(idCampo);
}

function limparCampoPorId(id) {
    document.getElementById(id).value = "";
}

function atualizarListaHTML(){
    let listaHTML = document.getElementById("listaAmigos");

    listaHTML.innerHTML = "";

    for (let nome of listaDeNomes) {
        let li = document.createElement("li"); 
        li.textContent = nome;                
        listaHTML.appendChild(li);
    } 
}