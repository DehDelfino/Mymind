


 
const novoUsuario = [] //array que armazenrara provisoriamente os dados do usuario



function validacaoSenha ( senha, confSenha){

  console.log("aeeee")
  // const  senhasCorretas = senha === confSenha ? true : false

  if( senha === confSenha){
    return true
  }

 
  else{

    return false
  }
}

function validacaoUsuario (usuario){
  const usuariosA = JSON.parse(localStorage.getItem("usuarios"))

  usuariosA.map((usuario)=> usuario===usuario.user)

  const usuarioExiste = usuariosA ? true :  false

  return usuarioExiste
  

}





function cadastrar(){

  //dados
  const $nomeCompletoValue = document.getElementById("nomeCompleto").value
  const $dataNascimentoValue = document.getElementById("dtnasc").value
  const $telefoneValue = document.getElementById("telefone").value
  const $emailValue = document.getElementById("email").value
  const $cpfValue = document.getElementById("cpf").value
  const $tempo = document.getElementById("tempo")
  const $tempoValue = $tempo.options[$tempo.selectedIndex].text
  const $comoNosConheceu = document.getElementById("comoNosConheceu")
  const $comoNosConheceuValue = $comoNosConheceu.options[$comoNosConheceu.selectedIndex].text
  const $userValue = document.getElementById("user").value
  const $senha = document.getElementById("senha").value
  const $senhaConfirmacao = document.getElementById("confSenha").value


  const validacaoSenha = validacaoSenha ( $senha, $senhaConfirmacao)
  
  
  const usuarioExiste = validacaoUsuario($userValue)

  
  
  
  if (validacaoSenha && !usuarioExiste){


    const dadosUsuario =
    {
      nome:$nomeCompletoValue,
      data:$dataNascimentoValue,
      telefone:$telefoneValue,
      email: $emailValue,
      cpf: $cpfValue,
      acompanhamento_psicológico: $tempoValue,
      ComoNosConheceu: $comoNosConheceuValue,
      user: $userValue,
      password: $senha, 

    }

    novoUsuario.push(dadosUsuario)

    const usuariosA = JSON.parse(localStorage.getItem("usuarios"))
    

    const usuarios = [...usuariosA, ...novoUsuario]
    
    

    window.localStorage.setItem("usuarios",JSON.stringify(usuarios))


 
 

  }
  else{
    window.alert("error")
  }

  
}


const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=>cadastrar())

const $btnConfirmarSenha = document.getElementById("confSenha")

$btnConfirmarSenha.addEventListener('blur',()=>{


  const $senha = document.getElementById("senha").value

  const $senhaConfirmacao = document.getElementById("confSenha").value
  
  if($senha === $senhaConfirmacao ){
    $btnConfirmarSenha.style.borderColor = ''
    console.log('inferno!')
  }
  else{
    $btnConfirmarSenha.style.borderColor = 'red'
    console.log('socorro')
  }
})