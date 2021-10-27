var listaArtigos = [[0, 'titulo 1', 'texto1', 'autor1' ][0, 'titulo 1', 'texto1', 'autor1' ]]
window.onload = function() {
    montarCardProduto();
}

function montarCardProduto() {
    for(var i=0; i<listaArtigos.length; i++)
    {
        var conteudo = "";
        conteudo += <div class ="">;
        conteudo += listaArtigos[i][1];
        conteudo +=</div>;
        document.getElementById('div-pagina').innerHTML += conteudo;
    }
}