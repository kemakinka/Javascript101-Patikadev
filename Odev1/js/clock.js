let myName = document.querySelector("#myName");
let myClock = document.querySelector("#myClock");

let isim = prompt("Adınızı Yazınız: ");
myName.classList.add("name-color");
myName.innerHTML= isim.toUpperCase();


setInterval(showTime, 1000);
function showTime() {
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    let time = new Date();
    let dayName = days[time.getDay()];
    myClock.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${dayName}`;

}