"use string"
const  view = document.getElementById("closeImage");
const pass = document.getElementById('password');

 function viewPassword(event){
    if (pass.getAttribute("type") == 'password'){
   view.setAttribute('src','img/open_eye.png');
   pass.setAttribute('type','text');
} else {
   view.setAttribute('src','img/close_eye.png');
    pass.setAttribute('type','password');
}

 }
 view.addEventListener("click",viewPassword);