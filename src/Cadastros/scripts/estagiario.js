const usuariosA = []
const usuariosB = []


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
  const $descricaoValue = document.getElementById("descricao").value
  

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

  
  console.log(usuario)

  usuariosB.push(usuario)

  const usuarios = [...usuariosA, ...usuariosB]
  

 window.localStorage.setItem("usuarios",JSON.stringify(usuarios))

 console.log(`testando nome: ${$nomeCompletoValue}`)
 console.log("chegou aqui")

  
}


const $buttonCadastrar = document.getElementById('btn-cadastrar')

$buttonCadastrar.addEventListener("click", ()=>cadastrar())


