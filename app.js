let listaDeNome = [];

function adicionarAmigo(){
    idCampo = "amigo"
    nomeDoAmigo = document.getElementById(idCampo).value.trim();
    
    if (nomeDoAmigo == "" || nomeDoAmigo == null) {
        alert ("Por favor, insira um nome.")
    }else {
        listaDeNome.push(nomeDoAmigo);
    }
    limparCampoPorId(idCampo);
    
    console.log(listaDeNome);   
}

function limparCampoPorId(id) {
    document.getElementById(id).value = "";
}
