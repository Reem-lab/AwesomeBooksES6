const msg = document.querySelector("#errorMsg")
const exbtn = document.createElement("button")

const checkRepetition = book => {
  for (let i = 0; i < Book.collection.length; i += 1) {
    const currentBook = Book.collection[i]
    if (
      currentBook.title.toLowerCase() === book.title.toLowerCase() &&
      currentBook.author.toLowerCase() === book.author.toLowerCase()
    ) {
      msg.textContent = " ❗ This Book is Already in the list"
      exbtn.textContent = "X"
      exbtn.classList.add("close-modal")
      msg.appendChild(exbtn)

      return false
    }
  }
  return true
}

exbtn.addEventListener("click", () => {
  msg.classList.add("hidden")
})

export const addBookToLibrary = () => {
  const inputTitleValue = inpTitle.value
  const inputAuthorValue = inpAutor.value
  const book = new Book(inputTitleValue, inputAuthorValue)
  if (checkRepetition(book)) {
    book.saveBooks()
  }
}

