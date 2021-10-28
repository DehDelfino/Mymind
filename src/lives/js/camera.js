async function startVideoFromCamera(){
    const specs = {video: {width: 1000, aspectRatio: 21/9}}

    const putaQPAriu = await navigator.mediaDevices.getUserMedia(specs)

    const videoElement = document.querySelector("#live")
    videoElement.srcObject = putaQPAriu

    
    

}


async function socorro(){
    
}




window.addEventListener("DOMContentLoaded",startVideoFromCamera)




