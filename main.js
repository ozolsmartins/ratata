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
rindas=x.split("\n")
rindas_copy=rindas
masivs=[
    17.36,
    17.48,
    19.68,
    21.57,
    25.49,
    29.62,
    37.94,
    41.80,
    45.78,
    49.76,
    56.70,
    60.66,
    64.67,
    78.13,
    86.17,
    90.26,
    94.24,
    98.25,
    102.31,
    106.40,
    110.27,
    112.29,
    114.35,
    117.10,
    121.16,
    125.17,
    131.47,
    154.66,
    163.67,
    167.59,
    171.55,
    183.99,
    187.05,
    191.19,
    196.77,
    203.00,
    208.80,
    215.95,
    232.15,
    238.53,
    242.79,
    246.85,
    250.94,
    254.90,
    258.95,
    263.03,
    267.18,
    271.35,
    275.30,
    279.36,
    283.42,
    287.45,
    291.66,
    295.48,
    299.54,
    302.67,
    303.69,
    312.14,
    315.76]
// document.getElementById("vardi").innerHTML=masivs.join("\n")
// function color(){
//     if(audio.play){
//         masivs[i] = "<span style=\"color:red\">"+masivs[i]+"</span>"
//     }
//     else{
//         masivs[i] = "<span style=\"color:black\">"+masivs[i]+"</span>"
//     }
// }

audio.addEventListener('timeupdate', (event) => {
  i=0
  document.getElementById("vardi").innerHTML=rindas_copy.join("\n")
  while(masivs[i]<audio.currentTime){
      i+=1
  }
  
  rindas[i] = "<span style=\"color:red\">"+rindas[i]+"</span>"
  document.getElementById("vardi").innerHTML=rindas.join("\n")
});

