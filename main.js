rindas=['             ', 'I was a little too tall', "Could've used a few pounds", 'Tight pants points hardly reknown', 'She was a black haired beauty with big dark eyes', 'And points all her own sitting way up high', 'Way up firm and high', 'Out past the cornfields where the woods got heavy', "Out in the back seat of my '60 Chevy", "Workin' on mysteries without any clues", "Workin' on our night moves", "Trying' to make some front page drive-in news", "Workin' on our night moves in the summertime", 'In the sweet summertime', "We weren't in love oh no far from it", "We weren't searching for some pie in the sky summit", 'We were just young and restless and bored', 'Living by the sword', "And we'd steal away every chance we could", 'To the backroom, the alley, the trusty woods', 'I used her she used me', 'But neither one cared', 'We were getting our share', "Workin' on our night moves", 'Trying to lose the awkward teenage blues', "Workin' on out night moves", 'And it was summertime', 'Sweet summmer time, summer time', 'And oh the wonder', 'Felt the lightning', 'And we waited on the thunder', 'Waited on the thunder', 'I woke last night to the sound of thunder', 'How far off I sat and wondered', 'Started humming a song from 1962', "Ain't it funny how the night moves", "When you just don't seem to have as much to lose", 'Strange how the night moves', 'With autumn closing in', 'Mmm, night moves, mmm', '(Night moves) night moves', '(Night moves) yeah', '(Night moves) I remember', '(Night moves) ah, I sure remember the night moves', "(Night moves) ain't it funny how you remember?", '(Night moves) funny how you remember', '(Night moves) I remember, I remember, I remember, I remember', '(Night moves) oh, oh, oh', "We were workin', workin' and practicin'", "(Night moves) workin' and practicin'", '(Night moves) oh, on the night moves, night moves', '(Night moves) oh', '(Night moves) I remember, yeah, yeah, yeah, I remember', '(Night moves) I remember, Lord I remember, Lord I remember', '(Night moves) ha, ha, ooh-hoo', 'Oh, yeah, yeah, yeah', 'Uh huh, uh huh', 'I remember, I remember']
masivs=[
    16.90,
    17.80,
    20.68,
    24.80,
    28.49,
    37.50,
    40.90,
    44.95,
    48.95,
    55.76,
    59.70,
    63.66,
    77.40,
    85.40,
    89.17,
    93.26,
    97.40,
    101.25,
    105.31,
    109.40,
    111.00,
    113.25,
    116.20,
    120.10,
    124.16,
    130.60,
    137.47,
    153.66,
    162.67,
    166.59,
    170.55,
    182.50,
    186.05,
    189.99,
    196.20,
    202.00,
    207.80,
    214.70,
    227.80,
    237.85,
    241.79,
    245.85,
    249.94,
    253.90,
    257.95,
    262.03,
    266.18,
    270.35,
    274.30,
    278.36,
    282.42,
    286.66,
    294.48,
    300.54,
    303.67,
    310.69,
    315.14,]
document.getElementById("vardi").innerHTML=rindas.join("\n")
intervals=null
audio=document.getElementById("audio")
function highlight(i){
    rindas_copy=['             ', 'I was a little too tall', "Could've used a few pounds", 'Tight pants points hardly reknown', 'She was a black haired beauty with big dark eyes', 'And points all her own sitting way up high', 'Way up firm and high', 'Out past the cornfields where the woods got heavy', "Out in the back seat of my '60 Chevy", "Workin' on mysteries without any clues", "Workin' on our night moves", "Trying' to make some front page drive-in news", "Workin' on our night moves in the summertime", 'In the sweet summertime', "We weren't in love oh no far from it", "We weren't searching for some pie in the sky summit", 'We were just young and restless and bored', 'Living by the sword', "And we'd steal away every chance we could", 'To the backroom, the alley, the trusty woods', 'I used her she used me', 'But neither one cared', 'We were getting our share', "Workin' on our night moves", 'Trying to lose the awkward teenage blues', "Workin' on out night moves", 'And it was summertime', 'Sweet summmer time, summer time', 'And oh the wonder', 'Felt the lightning', 'And we waited on the thunder', 'Waited on the thunder', 'I woke last night to the sound of thunder', 'How far off I sat and wondered', 'Started humming a song from 1962', "Ain't it funny how the night moves", "When you just don't seem to have as much to lose", 'Strange how the night moves', 'With autumn closing in', 'Mmm, night moves, mmm', '(Night moves) night moves', '(Night moves) yeah', '(Night moves) I remember', '(Night moves) ah, I sure remember the night moves', "(Night moves) ain't it funny how you remember?", '(Night moves) funny how you remember', '(Night moves) I remember, I remember, I remember, I remember', '(Night moves) oh, oh, oh', "We were workin', workin' and practicin'", "(Night moves) workin' and practicin'", '(Night moves) oh, on the night moves, night moves', '(Night moves) oh', '(Night moves) I remember, yeah, yeah, yeah, I remember', '(Night moves) I remember, Lord I remember, Lord I remember', '(Night moves) ha, ha, ooh-hoo', 'Oh, yeah, yeah, yeah', 'Uh huh, uh huh', 'I remember, I remember'];
    for(let j=0; j<rindas_copy.length;j++){
        if (j ===i){
            rindas_copy[j]="<span style=\"color:red\">"+rindas_copy[j]+"</span>";
        }
        else{
            rindas_copy[j]="<span style=\"visibility: hidden\">"+rindas_copy[j]+"</span>";
        }


    }
    rindas_copy[i]="<span style=\"color:red\">"+rindas_copy[i]+"</span>"
    document.getElementById("vardi").innerHTML=rindas_copy[i]
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
        rindas=['             ', 'I was a little too tall', "Could've used a few pounds", 'Tight pants points hardly reknown', 'She was a black haired beauty with big dark eyes', 'And points all her own sitting way up high', 'Way up firm and high', 'Out past the cornfields where the woods got heavy', "Out in the back seat of my '60 Chevy", "Workin' on mysteries without any clues", "Workin' on our night moves", "Trying' to make some front page drive-in news", "Workin' on our night moves in the summertime", 'In the sweet summertime', "We weren't in love oh no far from it", "We weren't searching for some pie in the sky summit", 'We were just young and restless and bored', 'Living by the sword', "And we'd steal away every chance we could", 'To the backroom, the alley, the trusty woods', 'I used her she used me', 'But neither one cared', 'We were getting our share', "Workin' on our night moves", 'Trying to lose the awkward teenage blues', "Workin' on out night moves", 'And it was summertime', 'Sweet summmer time, summer time', 'And oh the wonder', 'Felt the lightning', 'And we waited on the thunder', 'Waited on the thunder', 'I woke last night to the sound of thunder', 'How far off I sat and wondered', 'Started humming a song from 1962', "Ain't it funny how the night moves", "When you just don't seem to have as much to lose", 'Strange how the night moves', 'With autumn closing in', 'Mmm, night moves, mmm', '(Night moves) night moves', '(Night moves) yeah', '(Night moves) I remember', '(Night moves) ah, I sure remember the night moves', "(Night moves) ain't it funny how you remember?", '(Night moves) funny how you remember', '(Night moves) I remember, I remember, I remember, I remember', '(Night moves) oh, oh, oh', "We were workin', workin' and practicin'", "(Night moves) workin' and practicin'", '(Night moves) oh, on the night moves, night moves', '(Night moves) oh', '(Night moves) I remember, yeah, yeah, yeah, I remember', '(Night moves) I remember, Lord I remember, Lord I remember', '(Night moves) ha, ha, ooh-hoo', 'Oh, yeah, yeah, yeah', 'Uh huh, uh huh', 'I remember, I remember'];
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
        rindas=['             ', 'I was a little too tall', "Could've used a few pounds", 'Tight pants points hardly reknown', 'She was a black haired beauty with big dark eyes', 'And points all her own sitting way up high', 'Way up firm and high', 'Out past the cornfields where the woods got heavy', "Out in the back seat of my '60 Chevy", "Workin' on mysteries without any clues", "Workin' on our night moves", "Trying' to make some front page drive-in news", "Workin' on our night moves in the summertime", 'In the sweet summertime', "We weren't in love oh no far from it", "We weren't searching for some pie in the sky summit", 'We were just young and restless and bored', 'Living by the sword', "And we'd steal away every chance we could", 'To the backroom, the alley, the trusty woods', 'I used her she used me', 'But neither one cared', 'We were getting our share', "Workin' on our night moves", 'Trying to lose the awkward teenage blues', "Workin' on out night moves", 'And it was summertime', 'Sweet summmer time, summer time', 'And oh the wonder', 'Felt the lightning', 'And we waited on the thunder', 'Waited on the thunder', 'I woke last night to the sound of thunder', 'How far off I sat and wondered', 'Started humming a song from 1962', "Ain't it funny how the night moves", "When you just don't seem to have as much to lose", 'Strange how the night moves', 'With autumn closing in', 'Mmm, night moves, mmm', '(Night moves) night moves', '(Night moves) yeah', '(Night moves) I remember', '(Night moves) ah, I sure remember the night moves', "(Night moves) ain't it funny how you remember?", '(Night moves) funny how you remember', '(Night moves) I remember, I remember, I remember, I remember', '(Night moves) oh, oh, oh', "We were workin', workin' and practicin'", "(Night moves) workin' and practicin'", '(Night moves) oh, on the night moves, night moves', '(Night moves) oh', '(Night moves) I remember, yeah, yeah, yeah, I remember', '(Night moves) I remember, Lord I remember, Lord I remember', '(Night moves) ha, ha, ooh-hoo', 'Oh, yeah, yeah, yeah', 'Uh huh, uh huh', 'I remember, I remember'];
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


