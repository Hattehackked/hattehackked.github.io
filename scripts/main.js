// const myHeading = document.querySelector('h1')
// myHeading.textContent = 'yeahhhh!!'

// document.querySelector('html').onclick = function () {
//     alert('gooooo away')
// }


let myImage = document.querySelector('img')

myImage.onclick = function () {

    if (myImage.getAttribute('src') === 'images/mozilla.png') {
        myImage.setAttribute('src', 'images/firefox2.png')
    } else {
        myImage.setAttribute('src', 'images/firefox2.png')
    }
}





let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');




function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

