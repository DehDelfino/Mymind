const usuariosA = []
const novoUsuario = []


function cadastrar(){
  //dados
  

  const $nomeCompletoValue = document.getElementById("nomeCompleto").value
  const $dataNascimentoValue = document.getElementById("dtnasc").value
  const $sexoValue = document.getElementById("sexo").value
  // const $sexoValue = document.querySelector("input[name='sexo']:checked").value
  const $telefoneValue = document.getElementById("telefone").value
  const $emailValue = document.getElementById("email").value
  const $cpfValue = document.getElementById("cpf").value
  const $tempoValue = document.getElementById("tempo")[$tempoValue.selectedIndex].text
  const $comoNosConheceuValue = document.getElementById(" comoNosConheceu")[$comoNosConheceuValue.selectedIndex].text
  const $userValue = document.getElementById("user")[$userValue.selectedIndex].text
 
 
 

  const usuario = {
    nome:$nomeCompletoValue,
    data:$dataNascimentoValue,
    // sexo:$sexoValue,
    telefone:$telefoneValue,
    email: $emailValue,
    cpf: $cpfValue,
    tempo: $tempoValue,
    ComoNosConheceu: $comoNosConheceuValue,
    user = $userValue,

  }

  


  novoUsuario.push(usuario)

  const usuarios = [...usuariosA, ...novoUsuario]
  

 window.localStorage.setItem("usuarios",JSON.stringify(usuarios))


  
}


const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=>cadastrar())


