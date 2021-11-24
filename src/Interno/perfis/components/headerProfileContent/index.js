const headerProfileContent = (
    image="#",
    name='coloque aqui seu nome',
    user ='@ coloque aqui seu usuario',
    description ='coloque aqui sua descrição'
    )=>{
	return`
        <div class = 'headerProfileContent-follow'>
            <img class = 'headerProfileContent-imgProfile' src = ${image} />
            <button id= 'btn-seguir'class= 'mdl-button mdl-js-button mdl-button--raised mdl-button--colored' > seguir </button>
        </div>
        <div class ='headerProfileContent-containerInfo'>
            <span class = 'headerProfileContent-name'> ${name} </span>
            <span class = 'headerProfileContent-user'> ${user} </span>
            <span class = 'headerProfileContent-description'> ${description} </span>
        </div>
	`
}

export default headerProfileContent