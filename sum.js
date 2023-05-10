// alert('test')




// create an add function
function sum2numbers(num1, numb2) {
    var sum = num1 + numb2;
    return sum;
}


// call the button and add event listener
const button = document.querySelector('button');
// declare a const to save the ruslt 

// get element by id

function onclick(){
    console.log('test')
const num1 = document.querySelector("#num1").value;
const num2 = document.querySelector("#num2").value;
const res= sum2numbers(parseInt(num1), parseInt(num2));
let result = document.querySelector('#result');
result.textContent = num1  +"+" +num2   + "=" + res;

}
button.addEventListener('click',onclick)
