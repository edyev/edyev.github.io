var count ;
var play1, play2, song , bdy;
var pwidth = 0;
var song_selector = ["03 Be Alright", "04 Into You" ,
                    "09  Everyday (feat. Future)", "13 Touch It"];
window.onload = function init(){
    count = 0;
    var coeff = song_selector.length - 1; 
    bdy = document.querySelector("#main");
    song = document.querySelector("#song");
    play1 = document.querySelector("#player");
    play2 = document.querySelector("#played");
    play1.style.width ="240px";
    bdy.style.backgroundColor = "white";
    console.log("DOM ready!!" + coeff);
    console.log(play1.style);
    song.src = "Dangerous_Woman_LowQ/" + 
                song_selector[Math.round(Math.random()* coeff)] +
                ".mp3";
    console.log( song.src );
    mainLoop();

}
function play_toggle(){
    count++;
    if(count%2 == 0)
        song.play();
    else
        song.pause();
}

function mainLoop(){
    //console.log(  play1.style);
    
    pwidth ++;
    play2.style.width = 240 * song.currentTime / song.duration;
    requestAnimationFrame(mainLoop);
}



