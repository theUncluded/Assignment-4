// Assignment 3

//1 Select the section with an id of container without using querySelector.

document.getElementById("container")

//2 Select the section with an id of container using querySelector.

document.querySelector("container")

//3 Select all of the list items with a class of "second".

document.querySelectorAll(".second")

//4 Select a list item with a class of third, but only the list item inside of the ol tag

document.querySelector("ol.third")

//5 Give the section with an id of container the text "Hello!".

const menu = document.querySelector("#container")
const subMenu = document.createElement("h1")
subMenu.textContent = "Hello!"
menu.append(subMenu)


//6 Add the class main to the div with a class of footer.

const menu2 = document.querySelector(".footer")
menu2.classList.add("main")

//7 Remove the class main on the div with a class of footer.

menu2.remove()

//8 Create a new li element.
const menu3 = document.createElement("li")

//9 Give the li the text "four"
menu3.innerText = "four"

//10 Append the li to the ul element.
var appendLiUl = document.querySelector("ul")
appendLiUl.appendChild(menu3)

//11 or 12 Loop over all of the lis inside the ol tag and give them a background color of "green".
const loopLi = document.querySelectorAll("ol li")
for(let i =0;i<loopLi.length;i++)
    loopLi[i].style.backgroundColor = "green"

//13 Remove the div with a class of footer.
const removeDiv = document.querySelector(".footer")
removeDiv.remove()

