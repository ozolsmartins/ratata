audio=document.getElementById("audio")
function play(){
    if(audio.paused){
        audio.play()
    }
    else{
        audio.pause()
    }
}
document.getElementById("forward").addEventListener('click', forward())
function forward(){
    audio.currentTime += 10;
}
document.getElementById("rewind").addEventListener('click', rewind())
function rewind(){
    audio.currentTime -= 10;
}
x = document.getElementById("vardi").innerHTML
masivs=x.split("\n")
masivs[7] = "<span style=\"color:red\">"+masivs[7]+"</span>"
document.getElementById("vardi").innerHTML=masivs.join("\n")

