const usuariosA = []
const novoUsuario = []


function cadastrar(){
  //dados
  

  const $nomeCompletoValue = document.getElementById("nomeCompleto").value
  const $dataNascimentoValue = document.getElementById("dtnasc").value
  // const $sexoValue = document.querySelector("input[name='sexo']:checked").value
  const $telefoneValue = document.getElementById("prependedtext").value
  const $emailValue = document.getElementById("email").value
  const $cpfValue = document.getElementById("cpf").value
  const $periodoCurso = document.getElementById("curso")
  const $periodoCursoValue = $periodoCurso.options[$periodoCurso.selectedIndex].text
  const $faculdade = document.getElementById("Faculdade")
  const $faculdadeValue = $faculdade.options[$faculdade.selectedIndex].text
  const $cnpjValue = document.getElementById("cnpj").value
  
  

  const usuario = {
    nome:$nomeCompletoValue,
    data:$dataNascimentoValue,
    // sexo:$sexoValue,
    telefone:$telefoneValue,
    email: $emailValue,
    cpf: $cpfValue,
    periodo_do_curso: $periodoCursoValue,
    universidade: $faculdadeValue,
    descricao: $descricaoValue
  }

  


  novoUsuario.push(usuario)

  const usuarios = [...usuariosA, ...novoUsuario]
  

 window.localStorage.setItem("usuarios",JSON.stringify(usuarios))


  
}


const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=>cadastrar())


