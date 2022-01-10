// eslint-disable-next-line import/no-cycle
import { Book } from './book.js';

const msg = document.querySelector('#errorMsg');
const deleteBtn = document.createElement('button');

// eslint-disable-next-line import/prefer-default-export
export const checkRepetition = (book) => {
  for (let i = 0; i < Book.collection.length; i += 1) {
    const currentBook = Book.collection[i];
    if (
      currentBook.title.toLowerCase() === book.title.toLowerCase()
      && currentBook.author.toLowerCase() === book.author.toLowerCase()
    ) {
      msg.textContent = ' ❗ This Book is Already in the list';
      deleteBtn.textContent = 'X';
      deleteBtn.classList.add('close-modal');
      msg.appendChild(deleteBtn);

      return false;
    }
  }
  return true;
};

deleteBtn.addEventListener('click', () => {
  msg.classList.add('hidden');
});
