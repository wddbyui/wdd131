let btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
console.log(menu);

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}