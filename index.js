import {Book} from "./Modules/book.js";
import { addBookToLibrary } from "./Modules/repetition.js"
import { addNavLinks } from "./Modules/navlinks.js"

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

// const [list, addNew, contact] = document.querySelectorAll(".link")
//   const contactSection = document.querySelector(".contact-section")
//   const sec = document.querySelector(".sec")
//   const sec1 = document.querySelector(".sec1")

// list.addEventListener("click", () => {
//   contactSection.classList.add("hidden")
//   sec1.classList.add("hidden")
//   sec.classList.remove("hidden")
// })

// addNew.addEventListener("click", () => {
//   contactSection.classList.add("hidden")
//   sec1.classList.remove("hidden")
//   sec.classList.add("hidden")
// })

// contact.addEventListener("click", () => {
//   contactSection.classList.remove("hidden")
//   sec1.classList.add("hidden")
//   sec.classList.add("hidden")
// })