const listaArtigos = JSON.parse( localStorage.getItem("artigo"))

console.log(listaArtigos)

function montarCardProduto() {

    const div = document.getElementById('div-pagina')

    listaArtigos.map(({autor, texto, titulo})=>{
        
        

        let conteudo = ""; 
        conteudo += "<div class='div-artigo' style='height: 100%;'"
            conteudo += '<br>'
            conteudo += ` <h4> ${titulo} </h4>` ;
            conteudo += '<br>'
            conteudo += '<br>'
            conteudo += '<h6>'
            conteudo += ` Autor: ${autor}`
            conteudo += '</h6>'
            conteudo += '<br>'
            conteudo += ` <p> Texto: ${texto} </p> `
            conteudo += ' <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="BtnLerMais">Ler Mais (redirecionar a pagina de publicação) </button> '
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
