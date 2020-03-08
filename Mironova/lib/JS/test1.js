"use strict"
const play_zone = document.getElementById("object");
const a_button = document.getElementById("a");
const b_button = document.getElementById("b");
const c_button = document.getElementById("c");
const scoreInput = document.getElementById("play_score")
let score = 0;
a_button.addEventListener("click", img_delete);
b_button.addEventListener("click", img_delete);
c_button.addEventListener("click", img_delete);
let numberColor;

function img_insert() {
    let color1 = []
    color1[0] = Math.floor(Math.random() * 360);
    color1[1] = color1[0] + 100;
    scoreInput.innerHTML = score;
    numberColor = 2 + Math.floor(Math.random() * (10 - 2));
    console.log(numberColor)
    for (let i = 0; i < 12; i++) {
        let img = document.createElement("img")
        img.classList.add("object");
        img.setAttribute("src", `./img/object/val${Math.floor(Math.random() * 4)}.png`)
        play_zone.append(img);
        if (i < numberColor) {
            img.setAttribute("style", `filter: hue-rotate(${color1[0]}deg);`)
        } else {
            img.setAttribute("style", `filter: hue-rotate(${color1[1]}deg);`)
        }
    }
    a_button.setAttribute("style", `filter: hue-rotate(${color1[0]}deg);`)
    c_button.setAttribute("style", `filter: hue-rotate(${color1[1]}deg);`)
}

function img_delete(event) {
    let object = document.querySelectorAll(".object")
    for (let i = 0; i < object.length; i++) {
        object[i].remove();
    }
    if (numberColor > 6 && event.target.id === "a") {
        score += 1;
    } else if (numberColor < 6 && event.target.id === "c") {
        score += 1;
    } else if (numberColor == 6 && event.target.id === "b") {
        score += 1;
    }
    img_insert();
}
img_insert();