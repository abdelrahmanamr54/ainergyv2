let button =document.querySelector(".btn")
let body =document.querySelector("body")
let first =document.querySelector(".first")

button.onclick =function(){
    body.classList.toggle("dark")
    first.classList.toggle("dark")
}