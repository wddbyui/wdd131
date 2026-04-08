//Target1
para1 = document.querySelector('.para');
para1.style.backgroundColor = '#f2c556';
// OR
document.querySelector('.para').style.backgroundColor = '#f2c556';

// Target2
para1.querySelector('em').style.backgroundColor = '#acbfcc';
//OR
document.querySelector('.para em').style.backgroundColor = '#acbfcc';

//Target3
para1.querySelector('em').textContent = 'USS Voyager Starship';
//OR
para1.querySelector('em').innerText = 'USS Voyager Starship';

//Target4
//1.
let img = document.createElement('img');
//2.
img.setAttribute('src', 'https://bit.ly/3RfG4sY');
//3.
document.getElementById('starship').appendChild(img);
//OR
document.getElementById('starship').innerHTML = '<img src="https://bit.ly/3RfG4sY">';

//Target5
document.querySelector('#starship img').id = 'ship';


//Target6
document.querySelector('#starship img').className = 'rounded';
//OR
img.classList.add('rounded'); //doesn't work if they used innerHTML above. This creates a new image, not the one stored in the variable 'img'