"use strict"
let scroll = document.getElementById("btn-start");
console.log(scroll)
let post = document.getElementById("post")
scroll.addEventListener("click", scrollFun)

function scrollFun(event){
post.scrollIntoView();

}
