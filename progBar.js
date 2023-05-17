// declare the width id and x variables
var width = 0;
var x = document.querySelector("#mario");
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
        x.style.width = width + '%';
        }document
        }
// add event listener to the button
const button = document.querySelector('#right');
button.addEventListener('click', moveRight);

function moveRight() {
    marginRight=marginRight+10;
    x.style.marginLeft = marginRight+'px';
    x.src = "right.png";
    }
    
const buttonLeft = document.querySelector("#left")
buttonLeft.addEventListener("click",moveLift)

var marginLeft=0;
const buttonstop = document.querySelector("#stop")


function moveLift(){
    marginRight=marginRight-10;
    x.style.marginLeft = marginRight+'px';
    console.log(x.style.marginRight)
    x.src="left.jpeg"
    
}

const buttonaround = document.querySelector("#around")
buttonaround.addEventListener("click",moveAround)
var stop=false;
function moveAround(stop){
while(stop==false){




        
    
console.log("test")
}
}
function stop1(){
    stop=true
}

