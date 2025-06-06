let selectElem = document.querySelector('#theme-select');
let logo = document.querySelector('#logo');
let pageContent = document.querySelector('.content');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('ocean.jpg')";
        logo.setAttribute('src', 'ocean-logo.png');
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('forest.jpg')";
        logo.setAttribute('src', 'forest-logo.png');
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('desert.jpg')";
        logo.setAttribute('src', 'desert-logo.png');
    } else {
        // default
        document.body.style.backgroundImage = "none";
        logo.setAttribute('src', 'default-logo.png');
    }
}
