import headerProfile from "../components/headerProfile/index.js"

const $root = document.querySelector('#root')

const $headerProfile = headerProfile()
console.log($headerProfile)


$root.insertAdjacentHTML("beforeend",$headerProfile)  