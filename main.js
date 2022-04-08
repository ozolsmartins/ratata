audio=document.getElementById("audio")
function play(){
    if(audio.paused){
        audio.play()
    }
    else{
        audio.pause()
    }
}