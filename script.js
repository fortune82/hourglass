const hourglass3 = document.querySelector('.hourglass-3');
const hourglass4 = document.querySelector('.hourglass-4');
const hourglassMask = document.querySelector('.hourglass-3-mask');

function clockGlass() {
    setInterval(function clock() {
        hourglass4.style.transition = '60s linear';
        hourglass4.style.height = '249px';
        hourglass3.style.transition = '60s linear';
        hourglass3.style.height = '248px';
        hourglassMask.style.transition = '30s linear';
        hourglassMask.style.height = '105px';
    }, 1000);
    // document.addEventListener('click', () => {
    //     clockGlass()
    // })
}

clockGlass()