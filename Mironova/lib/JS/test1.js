"use strict"
const play_zone = document.getElementById("object");
const a_button = document.getElementById("a");
const c_button = document.getElementById("c");
a_button.addEventListener("click", img_delete);
c_button.addEventListener("click", img_delete);
function img_insert (){
    let color1= []
    color1[0] =Math.floor(Math.random()*360);;
    color1 [1]= Math.floor(Math.random()*360); 
    let numberColor =  Math.floor(Math.random()*9);
        for (let i = 0; i < 11; i++){
            let img = document.createElement("img")
            img.classList.add("object");
            img.setAttribute("src",`./img/object/val${Math.floor(Math.random()*4)}.png`)
            play_zone.append(img);
            if(i < numberColor){
                img.setAttribute("style",`filter: hue-rotate(${color1[0]}deg);`)
            }else{
                img.setAttribute("style",`filter: hue-rotate(${color1[1]}deg);`)
            }
        }
        a_button.setAttribute("style",`filter: hue-rotate(${color1[0]}deg);`)
        c_button.setAttribute("style",`filter: hue-rotate(${color1[1]}deg);`)
}
function img_delete(){
    let object = document.querySelectorAll(".object")
    for(let i = 0; i < object.length; i ++){
        object[i].remove();
    }
    img_insert();
}
img_insert ();