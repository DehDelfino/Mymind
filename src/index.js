const $entrar = document.getElementById("entrar")
const $modalLogin = document.getElementById('login')
const $closeButton = document.getElementById('close-button')
const $usuario = document.getElementById('usuario')
const $senha = document.getElementById('senha')
const $btnEntrar = document.getElementById('btn-entrar')
const $conatainerSenha = document.getElementById('containerSenha')
const $senhaInvalida = document.getElementById('msg-erroSenha')
const $btnCadastrar = document.getElementById("btn-cadastrarLogin")

const openModal = ()=>{
  $modalLogin.style.display ="block"
 
}

const closeModal = ()=>{
  $modalLogin.style.display ="none"
}


$closeButton.addEventListener('click',()=> closeModal())
$entrar.addEventListener('click', ()=> openModal())

//verificar se o usuario é cadastrado e então verificar a senha
$btnEntrar.addEventListener('click',()=>{
  
  const usuarios = JSON.parse(localStorage.getItem("usuarios"))

  
  debugger
  const usuarioDigitado = $usuario.value
  const senhaDigitada = $senha.value
    

  const usuario = usuarios.findIndex((usuario)=>usuario.user === usuarioDigitado && usuario.password === senhaDigitada)
  
  if(usuario >= 0 || usuario === null){

    $senhaInvalida.style.display= 'none'
    
    
    usuarios[usuario].loged = true

    window.localStorage.setItem("usuarios",JSON.stringify(usuarios))

    window.location.assign('./perfis/usuario/index.html')

    

  }else{
    $senhaInvalida.style.display= 'block'
    
    
  }
})

//Cadastrar

$btnCadastrar.addEventListener('click',()=>{
  window.location.assign("./Cadastros/cliente.html")
})


