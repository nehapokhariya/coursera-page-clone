// Filter btn js

const filterBtn = document.querySelector('.filter-btn');
const closeBtn = document.querySelector('.close-btn');
const offcanvasMenu = document.querySelector('.offcanvas-menu');
const openBtn = document.querySelector('.open-btn');


openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
});

filterBtn.addEventListener('click', function (e) {
    e.preventDefault();
    offcanvasMenu.classList.add('active');
});

closeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    offcanvasMenu.classList.remove('active');
});