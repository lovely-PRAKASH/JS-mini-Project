//selecting elements
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display= "block"
    popupbox.style.display= "block"
})

//selecting popupbutton
var cancelpopup = document.getElementById("cancle-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display= "none"
    popupbox.style.display= "none"
})

//selecting add-button,container,book-title-input,book-author-input,book-description-input
var addbutton =document.getElementById("add-book")
var container = document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    popupoverlay.style.display= "none"
    popupbox.style.display= "none"
    container.append(div)
})

function deletebook(event){
    event.target.parentElement.remove()
}