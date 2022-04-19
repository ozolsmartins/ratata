audio=document.getElementById("audio")
function play(){
    if(audio.paused){
        audio.play()
    }
    else{
        audio.pause()
    }
}
forward=document.getElementById("forward").addEventListener('click', forward)
function forward(){
    audio.currentTime += 10;
}
rewind=document.getElementById("rewind").addEventListener('click', rewind)
function rewind(){
    audio.currentTime -= 10;
}