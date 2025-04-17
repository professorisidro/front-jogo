function carregarJogos(){
    fetch("https://studious-barnacle-rxxxp76w5jhx6p5-8080.app.github.dev/jogos")
        .then(res => res.json())
        .then(jogos => preencheLista(jogos))
        .catch(err => alert("Erro ao recuperar"))
}

function preencheLista(jogos){
    let conteudo = "";
    for (i=0;i<jogos.length;i++){
        let jogo = jogos[i];

        conteudo  += `<h3>${jogo.titulo}</h3> 
                      <strong>Categoria:</strong> ${jogo.genero}<br/>
                      <p>Plataforma: ${jogo.plataforma}</p>
                      <h4>Preço R$ ${jogo.preco}</h4>` 

    }
    document.getElementById("listaJogos").innerHTML = conteudo;
}