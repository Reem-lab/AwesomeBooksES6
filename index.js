import { Book, addBookToLibrary } from './Modules/book.js';

import { addNavLinks } from './Modules/navlinks.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const inpAuthor = document.querySelector('#author');
const inpTitle = document.querySelector('#title');
const dateContainer = document.querySelector('.date');

const theTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
dateContainer.innerHTML = `${theTime}`;

const book = new Book();
const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  inpTitle.value = '';
  inpAuthor.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('books') !== null) {
    const myBooks = JSON.parse(localStorage.getItem('books'));
    Book.collection = myBooks;
  }
  book.iterateBooks();
});

addNavLinks();
