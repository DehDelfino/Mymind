async function startVideoFromCamera(){
    const specs = {video: {width: 850 , aspectRatio: 21/9}}

    const live = await navigator.mediaDevices.getUserMedia(specs)

    const videoElement = document.querySelector("#live")
    videoElement.srcObject = live

    
    

}





window.addEventListener("DOMContentLoaded",startVideoFromCamera)




