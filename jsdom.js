
// call element by tag name
var pTagElement = document.getElementsByTagName("p")
pTagElement[0].innerHTML = "This is a new paragraph. from get element by tag name"
console.log(pTagElement)

// call element by id
var pTagId= document.getElementById("pTagID")
pTagId.innerHTML = "This is a new paragraph. from get element by id"
pTagId.style.backgroundColor = 'red'
// call element by class name
var pTagClass= document.getElementsByClassName("pTagClass")
console.log(pTagClass)
pTagClass[0].innerHTML = "This is a new paragraph. from get element by class"
pTagClass[1].innerHTML = "This is a new paragraph. from get element by class for index 1"

// call element by query selector
var pTagQuerySelector = document.querySelectorAll("p.pTagClass")

console.log(pTagQuerySelector)
pTagQuerySelector[0].innerHTML = "This is a new paragraph. from get element by query selector"

// edit element properties
var imageEdit = document.getElementsByTagName("img")
imageEdit[0].src= ''
imageEdit[0].alt= 'new error'

imageEdit[0].style.color = 'red'