# Alarm Clock
### Goals
- make a alarm clock with Javascript
- show current time on laptop
- have selector elements for alarm to be set
- add alarm sounds
- make moving clock when alarm goes off
- make clock counts accordingly

// getting all id
let clock = document.getElementById("clock");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let ampm = document.getElementById("ampm");
let set = document.getElementById("set");

let currentTime;
let alarmElement;
let Alarm = false;

//grabs current/local time

function time(){
    let now = new Date();
    currentTime = now.toLocaleTimeString();
    //let alarmDateTime = new Date(alarmElement);
    //let alarmStr = alarmDateTime.toLocaleTimeString();
    
    if(currentTime == alarmElement) {
      alert('Timer done');
   }

    clock.textContent = currentTime;
    
    setTimeout(time, 1000);

}
time();

//drop down menu with time intervals

function MinuteSecond(dropDown){
    let select = dropDown;
    let timeInterval = 59;

    for (i = 0; i <= timeInterval; i++) {
        select.options[select.options.length] = new Option(i <10 ? "0" + i : i);
    }
}
function hours(dropDown){
    let select = dropDown;
    let timeInterval = 12;

    for (i = 0; i <= timeInterval; i++) {
        select.options[select.options.length] = new Option(i <10 ? "0" + i : i);
    }
}

MinuteSecond(second);
MinuteSecond(minute);
hours(hour);

// when clicking the button is sets a condition for the drop downs

set.onclick = function(){
    if(Alarm === false){
        second.disabled = true;
        minute.disabled = true;
        hour.disabled = true;
        ampm.disabled = true;

        alarmElement = hour.value + ":" + minute.value + ":" + second.value + " " + ampm.value;
        this.textContent = "Clear"
        Alarm = true;

    }
    else {
        second.disabled = false;
        minute.disabled = false;
        hour.disabled = false;
        ampm.disabled = false;

    
        this.textContent = "Set Alarm"
        Alarm = false;
    }
}









# alarmClock
