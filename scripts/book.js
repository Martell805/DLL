import {books} from "./books_info.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

let id = params["id"];

let name = document.getElementsByClassName('name')[0];
let description = document.getElementsByClassName('description')[0];
let big_img = document.getElementsByClassName('big-img')[0];
let small_imgs = document.getElementsByClassName('small-img');

name.innerHTML = books[id]["name"];
description.innerHTML = books[id]["description"];
big_img.src = books[id]["img"][0];

for(let i = 0; i < books[id]["img"].length; i++) {
    small_imgs[i].src = books[id]["img"][i];
}
