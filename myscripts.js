//Assignment 4
/*
//Q1
let button1 = document.querySelector('.button-one')
let button2 = document.querySelector('.button-two')
let text = document.querySelector('.text')

button1.onclick = function() {
  text.innerHTML = "I'm right";
}

button2.onclick = function() {
  text.innerText = "No, I'm right";
}
*/
//Q2 
/*
var headline = document.querySelector(".header")

headline.onmouseover = function() {
	alert("Hey, I told you not to hover over me!");
}
*/

//Q3
/*
const headline = document.querySelector(".header")

window.onkeypress = function(input) {
  headline.innerText = input.key;
}
*/

//Q4
let button = document.querySelector(".button")
let head = document.querySelector(".header")
function validation(){
    let passwordIn = document.form.password.value

    if(passwordIn !== '12345'){
        alert('incorrect')
        return false
    }
    head.innerText = 'The information in the form is correct';
}

button.onclick = validation()
