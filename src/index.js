import style from "./sass/index.scss";


const bookmarkingLink = document.getElementById('bookmarking');
const speedyLink = document.getElementById('speedy');
const sharingLink = document.getElementById('sharing');
const itemTwo = document.querySelector('.item__two');



speedyLink.addEventListener('click', (e) => {
    bookmarkingLink.classList.remove('active');
    speedyLink.classList.toggle('active');
    itemTwo.classList.toggle('active');
});