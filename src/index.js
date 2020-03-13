import style from "./sass/index.scss";


const bookmarkingLink = document.getElementById('bookmarking');
const speedyLink = document.getElementById('speedy');
const sharingLink = document.getElementById('sharing');

const itemOne = document.querySelector('.item__one');
const itemTwo = document.querySelector('.item__two');
const itemThree = document.querySelector('.item__three');

bookmarkingLink.addEventListener('click', e => {
    bookmarkingLink.classList.toggle('active');
    speedyLink.classList.remove('active');
    sharingLink.classList.remove('active');

    itemOne.classList.toggle('active');
    itemTwo.classList.remove('active');
    itemThree.classList.remove('active');
});

speedyLink.addEventListener('click', e => {
    bookmarkingLink.classList.remove('active');
    speedyLink.classList.toggle('active');
    sharingLink.classList.remove('active');

    itemOne.classList.remove('active');
    itemTwo.classList.toggle('active');
    itemThree.classList.remove('active');
});

sharingLink.addEventListener('click', e => {
    bookmarkingLink.classList.remove('active');
    speedyLink.classList.remove('active');
    sharingLink.classList.toggle('active');

    itemOne.classList.remove('active');
    itemTwo.classList.remove('active');
    itemThree.classList.toggle('active');
});