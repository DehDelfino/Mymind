
const novoUsuario = []



function validacaoSenha ( senha, confSenha){



  if (senha === confSenha){
    
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

    return true


  }

  else{
    return false
  }
}

function validacaoUsuario (usuario){
  const usuariosA = JSON.parse(localStorage.getItem("usuarios"))

  usuariosA.map((usuario)=> usuario===usuario.user)

  if(usuariosA){
    return false
  }

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


  
  
  


 
 


  
}


const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=>cadastrar())


