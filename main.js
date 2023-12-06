// Filter btn js

const closeFilterBtn = document.querySelector('#closeFilter');
const closeSidebarBtn = document.querySelector('#closeSidebar');

// const offcanvasMenu = document.querySelector('.offcanvas-menu');

const openBtn = document.querySelector('.open-btn');
const filterBtn = document.querySelector('.filter-btn');
const applyBtn = document.querySelector('#applyFilter');


openBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#toggleSidebar').classList.add('active');
});

filterBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#toggleFilter').classList.add('active');
});

closeFilterBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#toggleFilter').classList.remove('active');
});

closeSidebarBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#toggleSidebar').classList.remove('active');
});

applyBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#toggleFilter').classList.remove('active');
});