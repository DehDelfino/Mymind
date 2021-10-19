const usuariosA = []
const novoUsuario = []


function cadastrar(){
  //dados
  

  const $nomeCompletoValue = document.getElementById("nomeCompleto").value
  const $dataFundValue = document.getElementById("dataFund").value
  const $telefoneValue = document.getElementById("telefone").value
  const $emailValue = document.getElementById("email").value
  const $tipodeInstituiçãoValue = document.getElementById("tipodeInstituição")[$tipodeInstituiçãoValue.selectedIndex].text
 
 
 

  const usuario = {
    nome:$nomeCompletoValue,
    dataFund: $dataFundValue,
    telefone: $telefoneValue,
    email: $emailValue,
    tipodeInstituição: $tipodeInstituiçãoValue ,


  
  }

  


  novoUsuario.push(usuario)

  const usuarios = [...usuariosA, ...novoUsuario]
  

 window.localStorage.setItem("usuarios",JSON.stringify(usuarios))


  
}


const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=>cadastrar())


