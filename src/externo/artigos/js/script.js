const listaArtigos = JSON.parse( localStorage.getItem("artigo"))

console.log(listaArtigos)

function montarCardProduto() {

    const div = document.getElementById('div-pagina')

    listaArtigos.map(({autor, texto, titulo})=>{
        
        

        let conteudo = "";
        conteudo += "<div class='mldssocorro'"
            conteudo += '<br>'
            conteudo += ` <h2> titulo: ${titulo} </h2>` ;
            conteudo += '<br>'
            conteudo += '<br>'
            conteudo += '<h3>'
            conteudo += ` autor: ${autor}`
            conteudo += '</h3>'
            conteudo += '<br>'
            conteudo += '<br>'
            conteudo += ` Texto: ${texto} `
            conteudo += ' <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="BtnLerMais">Ler Mais </button> '
        conteudo += "</div>"


        console.log(conteudo)
        if(conteudo.type ===undefined){
            div.innerHTML += conteudo
        }
        
        
      ;
    })
    







    // for(var i=0; i<listaArtigos.length; i++)
    // {
    //     console.log(listaArtigos)
    //     var conteudo = "";
    //     conteudo += "<div>";
    //     conteudo += `${listaArtigos[i]}`;
    //     conteudo += "</div>";
    //     document.getElementById('div-pagina').innerHTML += conteudo;
    // }
}

montarCardProduto()
