window.onload = function(){

var time = document.getElementById('stopwatch');

var sec = 0;
var min = 0;
var hr = 0;
var intvl = true;


//Functions for the individual buttons when they're clicked - play, pause and reset.//
document.getElementById('play').onclick = () => {
    if(intvl == true){
        intvl = false;
        tCycle();
    }
}

document.getElementById('pause').onclick = () => {
    if(intvl == false){
        intvl = true;
    }
}

document.getElementById('stop').onclick = () => {
    time.innerHTML = '00h:00m:00s';
    intvl = true;
    sec = 0;
    min = 0;
    hr = 0;
}
 


//Initially mad a function that cycled through the milliseconds, seconds and minutes but was very
//inaccurate so settled on seconds, minutes and hours.

function tCycle(){
    if(intvl == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec++;
        if(sec == 60){                           
            min++;
            sec = 0;
        }

        if(min == 60){
            hr++;
            sec = 0;
            min = 0;
        }

        if(sec < 10 || sec == 0){
            sec = '0' + sec;
        }

        if(min < 10 || min == 0){
            min = '0' + min;
        }

        if(hr < 10 || hr == 0){
            hr = '0' + hr;
        }

        time.innerHTML = hr + 'h:' + min + 'm:' + sec + 's';

        setTimeout(tCycle, 1000)

    }    
}


}