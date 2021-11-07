


 
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
    loged:false

  }

  novoUsuario.push(dadosUsuario)

  const usuariosA = JSON.parse(localStorage.getItem("usuarios"))
  

  const usuarios = [...usuariosA, ...novoUsuario]
    
    
  
    window.localStorage.setItem("usuarios",JSON.stringify(usuarios))

  
  
  
 


debugger
  
}

//botão cadastrar
const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=>{
  
  cadastrar()
  
})


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

// verificação do campo nome 

const $nome = document.getElementById("nomeCompleto")

$nome.addEventListener('blur',()=>{
  
  const inputUsuario = $nome.value


  

  
  if(inputUsuario.length <= 1){
    $nome.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
  }
  //retorna ao normal
  else{
    $nome.style.borderColor = ""
    document.getElementById('btn-cadastrar').disabled=false
  }

  

})




// verificação do campo data

const $data = document.getElementById("dtnasc")

$data.addEventListener('blur',()=>{
  
  const inputUsuario = $data.value


  

  
  if(inputUsuario.length <= 7){
    $data.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
  }
  //retorna ao normal
  else{
    $data.style.borderColor = ""
    document.getElementById('btn-cadastrar').disabled=false
  }

  

})



// verificação do campo numero de telefone

const $numeroDeTelefone = document.getElementById("telefone")

$numeroDeTelefone.addEventListener('blur',()=>{
  
  const inputUsuario =parseInt($numeroDeTelefone.value)


  

  
  if(inputUsuario.toString().length <= 10){
    $numeroDeTelefone.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
  }
  //retorna ao normal
  else{
    $numeroDeTelefone.style.borderColor = ""
    document.getElementById('btn-cadastrar').disabled=false
  }

  

})




// verificação do campo e-mail

const $email = document.getElementById("email")



$email.addEventListener('blur',()=>{
  
  const inputUsuario = $email.value
  

  usuario = inputUsuario.substring(0,  inputUsuario.indexOf("@"));
  dominio =  inputUsuario.substring( inputUsuario.indexOf("@")+ 1,  inputUsuario.length);

  if ((usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)) 
      {

        $email.style.borderColor = ""
        document.getElementById('btn-cadastrar').disabled=false
      }
  else{
    $email.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
  }
  

 

  

})


// verificação do campo CPF

const $cpf = document.getElementById("cpf")

$cpf.addEventListener('blur',()=>{
  
  const inputUsuario = $cpf.value


  

  
  if(inputUsuario.length <= 10){
    $cpf.style.borderColor = "red" //muda a borda para vermelho
    document.getElementById('btn-cadastrar').disabled=true //desabilita o botão de cadastro
  }
  //retorna ao normal
  else{
    $cpf.style.borderColor = ""
    document.getElementById('btn-cadastrar').disabled=false
  }

  

})