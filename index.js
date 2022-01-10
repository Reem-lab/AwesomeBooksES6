import {Book} from "./Modules/book.js";
import { addBookToLibrary } from "./Modules/book.js"
import { addNavLinks } from "./Modules/navlinks.js"
const inpAuthor = document.querySelector("#author");
const inpTitle = document.querySelector("#title");
const dateContainer = document.querySelector('.date');
import { DateTime } from "luxon";


const now = DateTime.now().toLocaleString();

dateContainer.innerHTML = `<span>${now}</span>`;



const book = new Book()
const form = document.querySelector(".form")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  addBookToLibrary()
  inpTitle.value = ""
  inpAuthor.value = ""
})

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("books") !== null) {
    const myBooks = JSON.parse(localStorage.getItem("books"))
    Book.collection = myBooks
  }
  book.iterateBooks()
})

addNavLinks();

