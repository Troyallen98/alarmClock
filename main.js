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
    
    if(currentTime >= alarmElement) {
        alert('Timer done');
        return;
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

const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}
new Darkmode(options).showWidget();// getting all id
