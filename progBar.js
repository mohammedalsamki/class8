// declare the width id and elem variables
var width = 0;
var elem = document.querySelector("#mario");
var id;
var marginRight = 0;
/// create a function to move the bar
function move() {
    let id = setInterval(frame, 10)
    }

    // create a function make frames
function frame() {
        if (width == 100) {
        clearInterval(id);
        } else {
        width++;
        elem.style.width = width + '%';
        }document
        }
// add event listener to the button
const button = document.querySelector('button');
button.addEventListener('click', moveRight);

function moveRight() {
    marginRight++;
    elem.style.marginLeft = marginRight+'px';
    elem.src = "CSS.jpg";
    }

