rindas=['             ', 'I was a little too tall', "Could've used a few pounds", 'Tight pants points hardly reknown', 'She was a black haired beauty with big dark eyes', 'And points all her own sitting way up high', 'Way up firm and high', 'Out past the cornfields where the woods got heavy', "Out in the back seat of my '60 Chevy", "Workin' on mysteries without any clues", "Workin' on our night moves", "Trying' to make some front page drive-in news", "Workin' on our night moves in the summertime", 'In the sweet summertime', "We weren't in love oh no far from it", "We weren't searching for some pie in the sky summit", 'We were just young and restless and bored', 'Living by the sword', "And we'd steal away every chance we could", 'To the backroom, the alley, the trusty woods', 'I used her she used me', 'But neither one cared', 'We were getting our share', "Workin' on our night moves", 'Trying to lose the awkward teenage blues', "Workin' on out night moves", 'In the summertime', 'And oh the wonder', 'Felt the lightning', 'And we waited on the thunder', 'Waited on the thunder', 'I woke last night to the sound of thunder', 'How far off I sat and wondered', 'Started humming a song from 1962', "Ain't it funny how the night moves", "When you just don't seem to have as much to lose", 'Strange how the night moves', 'With autumn closing in', 'Mmm, night moves, mmm', '(Night moves) night moves', '(Night moves) yeah', '(Night moves) I remember', '(Night moves) ah, I sure remember the night moves', "(Night moves) ain't it funny how you remember?", '(Night moves) funny how you remember', '(Night moves) I remember, I remember, I remember, I remember', '(Night moves) oh, oh, oh', "We were workin', workin' and practicin'", "(Night moves) workin' and practicin'", '(Night moves) oh, on the night moves, night moves', '(Night moves) oh', '(Night moves) I remember, yeah, yeah, yeah, I remember', '(Night moves) ooh', '(Night moves) I remember, Lord I remember, Lord I remember', '(Night moves) ha, ha, ooh-hoo', 'Oh, yeah, yeah, yeah', 'Uh huh, uh huh', 'I remember, I remember']
masivs=[
    17.36,
    18.48,
    20.68,
    22.57,
    26.49,
    30.62,
    38.94,
    42.80,
    46.78,
    50.76,
    57.70,
    61.66,
    65.67,
    79.13,
    87.17,
    91.26,
    95.24,
    98.25,
    103.31,
    107.40,
    111.27,
    113.29,
    115.35,
    118.10,
    122.16,
    126.17,
    132.47,
    155.66,
    164.67,
    168.59,
    172.55,
    184.99,
    188.05,
    192.19,
    197.77,
    204.00,
    209.80,
    216.95,
    233.15,
    239.53,
    243.79,
    247.85,
    251.94,
    255.90,
    259.95,
    264.03,
    268.18,
    272.35,
    276.30,
    280.36,
    284.42,
    289.45,
    292.66,
    296.48,
    300.54,
    303.67,
    304.69,
    313.14,
    316.76]
document.getElementById("vardi").innerHTML=rindas.join("\n")
intervals=null
audio=document.getElementById("audio")
function highlight(i){
    rindas_copy=['             ', 'I was a little too tall', "Could've used a few pounds", 'Tight pants points hardly reknown', 'She was a black haired beauty with big dark eyes', 'And points all her own sitting way up high', 'Way up firm and high', 'Out past the cornfields where the woods got heavy', "Out in the back seat of my '60 Chevy", "Workin' on mysteries without any clues", "Workin' on our night moves", "Trying' to make some front page drive-in news", "Workin' on our night moves in the summertime", 'In the sweet summertime', "We weren't in love oh no far from it", "We weren't searching for some pie in the sky summit", 'We were just young and restless and bored', 'Living by the sword', "And we'd steal away every chance we could", 'To the backroom, the alley, the trusty woods', 'I used her she used me', 'But neither one cared', 'We were getting our share', "Workin' on our night moves", 'Trying to lose the awkward teenage blues', "Workin' on out night moves", 'In the summertime', 'And oh the wonder', 'Felt the lightning', 'And we waited on the thunder', 'Waited on the thunder', 'I woke last night to the sound of thunder', 'How far off I sat and wondered', 'Started humming a song from 1962', "Ain't it funny how the night moves", "When you just don't seem to have as much to lose", 'Strange how the night moves', 'With autumn closing in', 'Mmm, night moves, mmm', '(Night moves) night moves', '(Night moves) yeah', '(Night moves) I remember', '(Night moves) ah, I sure remember the night moves', "(Night moves) ain't it funny how you remember?", '(Night moves) funny how you remember', '(Night moves) I remember, I remember, I remember, I remember', '(Night moves) oh, oh, oh', "We were workin', workin' and practicin'", "(Night moves) workin' and practicin'", '(Night moves) oh, on the night moves, night moves', '(Night moves) oh', '(Night moves) I remember, yeah, yeah, yeah, I remember', '(Night moves) ooh', '(Night moves) I remember, Lord I remember, Lord I remember', '(Night moves) ha, ha, ooh-hoo', 'Oh, yeah, yeah, yeah', 'Uh huh, uh huh', 'I remember, I remember'];
    rindas_copy[i]="<span style=\"color:red\">"+rindas_copy[i]+"</span>"
    document.getElementById("vardi").innerHTML=rindas_copy.join("\n")
}
i=0;
function CheckTime(){
    intervals = null
    document.getElementById("vardi").innerHTML=rindas.join("\n")
    clearInterval(intervals);
    intervals=setInterval(() => {
        
        while(masivs[i]<audio.currentTime){
            i+=1
        }
        highlight(i)
    }, 20);

    if(audio.paused){
        clearInterval(intervals);
        rindas=['             ', 'I was a little too tall', "Could've used a few pounds", 'Tight pants points hardly reknown', 'She was a black haired beauty with big dark eyes', 'And points all her own sitting way up high', 'Way up firm and high', 'Out past the cornfields where the woods got heavy', "Out in the back seat of my '60 Chevy", "Workin' on mysteries without any clues", "Workin' on our night moves", "Trying' to make some front page drive-in news", "Workin' on our night moves in the summertime", 'In the sweet summertime', "We weren't in love oh no far from it", "We weren't searching for some pie in the sky summit", 'We were just young and restless and bored', 'Living by the sword', "And we'd steal away every chance we could", 'To the backroom, the alley, the trusty woods', 'I used her she used me', 'But neither one cared', 'We were getting our share', "Workin' on our night moves", 'Trying to lose the awkward teenage blues', "Workin' on out night moves", 'In the summertime', 'And oh the wonder', 'Felt the lightning', 'And we waited on the thunder', 'Waited on the thunder', 'I woke last night to the sound of thunder', 'How far off I sat and wondered', 'Started humming a song from 1962', "Ain't it funny how the night moves", "When you just don't seem to have as much to lose", 'Strange how the night moves', 'With autumn closing in', 'Mmm, night moves, mmm', '(Night moves) night moves', '(Night moves) yeah', '(Night moves) I remember', '(Night moves) ah, I sure remember the night moves', "(Night moves) ain't it funny how you remember?", '(Night moves) funny how you remember', '(Night moves) I remember, I remember, I remember, I remember', '(Night moves) oh, oh, oh', "We were workin', workin' and practicin'", "(Night moves) workin' and practicin'", '(Night moves) oh, on the night moves, night moves', '(Night moves) oh', '(Night moves) I remember, yeah, yeah, yeah, I remember', '(Night moves) ooh', '(Night moves) I remember, Lord I remember, Lord I remember', '(Night moves) ha, ha, ooh-hoo', 'Oh, yeah, yeah, yeah', 'Uh huh, uh huh', 'I remember, I remember'];
        document.getElementById("vardi").innerHTML=rindas.join("\n")
    }
}


function play(){
    if(audio.paused){
        audio.play()
        CheckTime()
    }
    else{
        audio.pause()
        clearInterval(intervals);
        rindas=['             ', 'I was a little too tall', "Could've used a few pounds", 'Tight pants points hardly reknown', 'She was a black haired beauty with big dark eyes', 'And points all her own sitting way up high', 'Way up firm and high', 'Out past the cornfields where the woods got heavy', "Out in the back seat of my '60 Chevy", "Workin' on mysteries without any clues", "Workin' on our night moves", "Trying' to make some front page drive-in news", "Workin' on our night moves in the summertime", 'In the sweet summertime', "We weren't in love oh no far from it", "We weren't searching for some pie in the sky summit", 'We were just young and restless and bored', 'Living by the sword', "And we'd steal away every chance we could", 'To the backroom, the alley, the trusty woods', 'I used her she used me', 'But neither one cared', 'We were getting our share', "Workin' on our night moves", 'Trying to lose the awkward teenage blues', "Workin' on out night moves", 'In the summertime', 'And oh the wonder', 'Felt the lightning', 'And we waited on the thunder', 'Waited on the thunder', 'I woke last night to the sound of thunder', 'How far off I sat and wondered', 'Started humming a song from 1962', "Ain't it funny how the night moves", "When you just don't seem to have as much to lose", 'Strange how the night moves', 'With autumn closing in', 'Mmm, night moves, mmm', '(Night moves) night moves', '(Night moves) yeah', '(Night moves) I remember', '(Night moves) ah, I sure remember the night moves', "(Night moves) ain't it funny how you remember?", '(Night moves) funny how you remember', '(Night moves) I remember, I remember, I remember, I remember', '(Night moves) oh, oh, oh', "We were workin', workin' and practicin'", "(Night moves) workin' and practicin'", '(Night moves) oh, on the night moves, night moves', '(Night moves) oh', '(Night moves) I remember, yeah, yeah, yeah, I remember', '(Night moves) ooh', '(Night moves) I remember, Lord I remember, Lord I remember', '(Night moves) ha, ha, ooh-hoo', 'Oh, yeah, yeah, yeah', 'Uh huh, uh huh', 'I remember, I remember'];
        document.getElementById("vardi").innerHTML=rindas.join("\n")
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


