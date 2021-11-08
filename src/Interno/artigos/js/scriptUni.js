   const $botaoEnviar = document.getElementById('BtnEnviar')

$botaoEnviar.addEventListener("click", ()=>{

  console.log('chegay')

    const artigos = []
 
    const $titulo = document.getElementById('titulo')
    const $autor = document.getElementById('autor')
    const $texto = document.getElementById('texto')
 
    
    const artigo = {
        titulo: $titulo.value , 
        texto:  $texto.value ,
        autor: $autor.value ,
    }
    
    artigos.push(artigo)
    
    window.localStorage.setItem("artigo", JSON.stringify(artigos))

})




