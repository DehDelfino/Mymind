const $modalLogin = document.getElementById('login')
const $closeButton = document.getElementById('close-button')

const opneModal = ()=>{
  $modalLogin.style.display ="flex"
}

const closeModal = ()=>{
  $modalLogin.style.display ="none"
}


$closeButton.addEventListener('click',()=> closeModal())
