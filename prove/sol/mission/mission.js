let selectElem = document.querySelector('select');

let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;

    if (current == 'dark'){
        // give body the dark class
        document.body.className = 'dark';
        // add different image by changing src
        logo.setAttribute('src', 'byui-logo_white.png');
    } else {
        // take off class
        document.body.classList.remove('dark');
        // change the image back to original
        logo.setAttribute('src', 'byui-logo.webp')
    }
}