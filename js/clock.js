let myName = prompt("Adınızı Girin: ")
let span = document.querySelector("#myName")
span.innerHTML = myName

let myClock = document.querySelector("#myClock")

function showTime(){
    let time = new Date()
    let day = time.getDay()
    let minutes = time.getMinutes()
    
    if(day == 0)day = "Pazar"
    else if(day == 1)day = "Pazartesi"
    else if(day == 2)day = "Salı"
    else if(day == 3)day = "Çarşamba"
    else if(day == 4)day = "Perşembe"
    else if(day == 5)day = "Cuma"
    else { day = "Cumartesi" }

    myClock.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " " + day
}

setInterval(showTime,1000)