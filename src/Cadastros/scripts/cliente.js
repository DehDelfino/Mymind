


 
const novoUsuario = [] //array que armazenrara provisoriamente os dados do usuario





function validacaoUsuario (usuario){

 
  const usuariosA = JSON.parse(localStorage.getItem("usuarios"))

  const usuarioExistente = usuariosA.map((usuarios)=> usuarios.user === usuario)

 
 return usuarioExistente
  

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
  const $user = document.getElementById("user")
  const $senha = document.getElementById("senha").value
  // const $senhaConfirmacao = document.getElementById("confSenha").value


  
  
  
  

  
    
  const dadosUsuario =
  {
    nome:$nomeCompletoValue,
    data:$dataNascimentoValue,
    telefone:$telefoneValue,
    email: $emailValue,
    cpf: $cpfValue,
    acompanhamento_psicológico: $tempoValue,
    ComoNosConheceu: $comoNosConheceuValue,
    user: $user.value,
    password: $senha, 

  }

  novoUsuario.push(dadosUsuario)

  const usuariosA = JSON.parse(localStorage.getItem("usuarios"))
  

  const usuarios = [...usuariosA, ...novoUsuario]
    
    
  
    window.localStorage.setItem("usuarios",JSON.stringify(usuarios))

  
  
  
 




 
 

  
  

  
}

//botão cadastrar
const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=>cadastrar())


// confirmação de senha

const $btnConfirmarSenha = document.getElementById("confSenha")

$btnConfirmarSenha.addEventListener('blur',()=>{

 
  const $senha = document.getElementById("senha").value

  const $senhaConfirmacao = document.getElementById("confSenha").value
  
  if($senha === $senhaConfirmacao ){
    $btnConfirmarSenha.style.borderColor = ''
    document.getElementById('btn-cadastrar').disabled = false
  }
  else{
    $btnConfirmarSenha.style.borderColor = 'red'
    document.getElementById('btn-cadastrar').disabled = true
  }
})


//verificação de usuario cadastrado
const $user = document.getElementById("user")

$user.addEventListener('blur',()=>{
  
  const inputUsuario = $user.value

  console.log(inputUsuario)
  const usuariosA = JSON.parse(localStorage.getItem("usuarios"))
  

  const usuarioExistente = usuariosA.findIndex(({user})=> user == inputUsuario )
  console.log(usuarioExistente)

  if(usuarioExistente >= 0){
    $user.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
  }
  //retorna ao normal
  else{
    $user.style.borderColor = ""
    document.getElementById('btn-cadastrar').disabled=false
  }

  

})