var count ;
var play1, play2, song , bdy, tit;
var pwidth = 0, sec_count = 0, last_sec;
var time;
var song_selector = ["03 Be Alright", "04 Into You" ,
                    "09  Everyday (feat. Future)", "13 Touch It"];
var color_sel = ["cyan", "red"];
var padd_sel = ["10px", "14px"];
window.onload = function init(){
    count = 0;
    var coeff = song_selector.length - 1; 
    bdy = document.querySelector("#main");
    song = document.querySelector("#song");
    play1 = document.querySelector("#player");
    play2 = document.querySelector("#played");
    tit = document.querySelector("#title");
    tit.style.paddingLeft = "14px"
    play1.style.width ="240px";
    bdy.style.backgroundColor = "white";
    console.log("DOM ready!!");

    song.src = "Dangerous_Woman_LowQ/" + 
                song_selector[Math.round(Math.random()* coeff)] +
                ".mp3";
     console.log(song.src);
    mainLoop();

}
function play_toggle(){
   

    count++;
    if(count%2 == 0)
        song.play();
    else
        song.pause();
}
function title_toggle(){
    sec_count++
    tit.style.color = color_sel[sec_count % 2];
    tit.style.paddingLeft = padd_sel[sec_count % 2];
}

function mainLoop(){
    //console.log(  play1.style);
    console.log(song.currentTime);
    time = new Date().getMilliseconds();
    if(time % 2 == 0)
        title_toggle();
    if(song.currentTime >= song.duration)
        song.currentTime = 0;
    pwidth ++;
    play2.style.width = 240 * song.currentTime / song.duration;
    last_sec = time;
    requestAnimationFrame(mainLoop);
}



