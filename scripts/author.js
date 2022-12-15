import {books, authors} from "./backend.js";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

let id = params["id"];

let name = document.getElementsByClassName('name')[0];
let portrait = document.getElementsByClassName('big-img')[0];
let description = document.getElementsByClassName('description')[0];

name.innerHTML = authors[id].name;
portrait.src = authors[id].portrait;
description.innerHTML = "<p>" + authors[id].description + "</p>";

description.innerHTML += "Книги: <ul>";

for(let book_id of authors[id].books) {
    description.innerHTML += "<li><i><a href='book.html?id=" + book_id +  "'>" + books[book_id].name + "</a></i></li>";
}

description.innerHTML += "</ul>";
