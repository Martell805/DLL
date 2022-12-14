import {books, authors} from "./backend.js";
import {truncate_cards} from "./trunker.js";

let book_row = document.getElementsByClassName('book-row')[0];
let card_blackout = document.getElementsByClassName('card-blackout')[0];

for(let id in books) {
    let book_card = document.createElement("div");
    book_card.classList.add("card");
    book_card.classList.add("book-card");

    let book_name = document.createElement("h2");
    book_name.innerHTML = books[id].name;

    let book_author = document.createElement("a");
    book_author.innerHTML = "<i>" + authors[books[id].author_id].name + "</i>";
    book_author.href = "author.html?id=" + books[id].author_id;

    let book_img = document.createElement("img");
    book_img.style.height = "50px";
    book_img.style.display = "inline-block";
    book_img.src = books[id].img[0];

    let book_description = document.createElement("p");
    book_description.classList.add("card-info");

    book_description.innerHTML = books[id].description;

    let book_btn = document.createElement("a");
    book_btn.classList.add("button");
    book_btn.classList.add("button2");
    book_btn.innerHTML = "Подробнее";
    book_btn.href = "book.html?id=" + id;

    book_card.appendChild(book_name);
    book_card.appendChild(book_author);
    book_card.appendChild(book_img);
    book_card.appendChild(book_description);
    book_card.appendChild(book_btn);

    book_row.insertBefore(book_card, card_blackout);
}

truncate_cards();
