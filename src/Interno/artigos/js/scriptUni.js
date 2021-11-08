  
   const $botaoEnviar = document.getElementById('BtnEnviar') 
   
   

$botaoEnviar.addEventListener("click", ()=>{

 

 const listaArtigos = JSON.parse( localStorage.getItem("artigo"))|| []
 
    const $titulo = document.getElementById('titulo')
    const $autor = document.getElementById('autor')
    const $texto = document.getElementById('texto')
 
    
    const artigo = {
        titulo: $titulo.value , 
        texto:  $texto.value ,
        autor: $autor.value ,
    }
    
    listaArtigos.push(artigo)
    
    window.localStorage.setItem("artigo", JSON.stringify(listaArtigos))


})





