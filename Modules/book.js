// eslint-disable-next-line import/no-cycle
import { checkRepetition } from './repetition.js';

const inpAuthor = document.querySelector('#author');
const inpTitle = document.querySelector('#title');

const bookContainer = document.querySelector('.book-container');
export class Book {
  static collection = []

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static setLocalStorage = () => {
    const data = JSON.stringify(Book.collection);
    localStorage.setItem('books', data);
  }

  deleteBook = (title, author) => {
    Book.collection = Book.collection.filter(
      (book) => book.title !== title || book.author !== author,
    );
  }

  showBook(book) {
    const bookDiv = document.createElement('DIV');
    const bookTitle = document.createElement('p');
    const deleteBtn = document.createElement('BUTTON');
    deleteBtn.classList.add('btn-remove');

    const title = `"${book.title}" by ${book.author}`;
    bookTitle.textContent = title;
    deleteBtn.textContent = 'Remove';

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(deleteBtn);
    bookContainer.appendChild(bookDiv);
    deleteBtn.addEventListener('click', () => {
      this.deleteBook(book.title, book.author);
      Book.setLocalStorage(Book.collection);
      bookContainer.removeChild(bookDiv);
    });
  }

  iterateBooks() {
    Book.collection.forEach((book) => {
      this.showBook(book);
    });
  }

  saveBooks() {
    const book = new Book(inpTitle.value, inpAuthor.value);
    Book.collection.push(book);
    Book.setLocalStorage(Book.collection);
    this.showBook(book);
  }
}

export const addBookToLibrary = () => {
  const inputTitleValue = inpTitle.value;
  const inputAuthorValue = inpAuthor.value;
  const book = new Book(inputTitleValue, inputAuthorValue);
  if (checkRepetition(book)) {
    book.saveBooks();
  }
};
