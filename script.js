const hourglass3 = document.querySelector('.hourglass-3');
const hourglass4 = document.querySelector('.hourglass-4');

function clockGlass() {
    setInterval(function clock() {
        hourglass4.style.transition = '60s linear';
        hourglass4.style.height = '250px';
        hourglass3.style.transition = '60s linear';
        hourglass3.style.height = '250px';
    }, 1000);

}

clockGlass()