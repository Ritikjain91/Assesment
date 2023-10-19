const span1 = document.querySelector('.span-1');
const arr = ["PG", "Home", "Rental"];
let currentIndex = 0;

setInterval(() => {
    span1.innerHTML = arr[currentIndex];
    currentIndex = (currentIndex + 1) % arr.length;
}, 2000);