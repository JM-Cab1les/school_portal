const menu_close = document.querySelector("#menu-close");
const menu_open = document.querySelector("#menu-btn");
const menu = document.querySelector(".nav .navigation ul");

let countDate = new Date ('aug 19, 2022 13:00:00').getTime();


menu_close.addEventListener('click', () => {
    menu.classList.remove('active');
});

menu_open.addEventListener('click', () => {
    menu.classList.add('active');
});


function countDown()
{
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let s = Math.floor((gap % (minute)) / (second));


    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;

}

setInterval(function(){
    countDown();
}, 1000)