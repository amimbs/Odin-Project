class Book {
    constructor(title = '', author = '', pages = '', read = '') {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor(books = []) {
        this.books = books;
    }

    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook)
        }
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title)
    }
}

const userLibrary  = new Library(loadFromLocal() || []);
const formModal = document.getElementById("newBook-modal");
const formOverlay = document.getElementById("overlay");
const addForm = document.getElementById("newBook-Form");
const libraryContainer = document.getElementById('library-container');

function openAddModal() {
    addForm.reset();
    formModal.classList.add('active');
    formOverlay.classList.add('active');
}

function closeAddModal() {
    formModal.classList.remove('active');
    formOverlay.classList.remove('active');
}

function getUserBook() {
    const title = addForm.elements.title.value
    const author = addForm.elements.author.value
    const pages = addForm.elements.pageCount.value
    const read = addForm.elements.read.value
    return new Book(title, author, pages, read)
}

function addBook(event) {
    event.preventDefault();
    const newBook = getUserBook();

    if (userLibrary.isInLibrary(newBook)) {
        alert("This book is already in your library!");
        return;
    } else {
        userLibrary.addBook(newBook);
        displayLibrary();
        saveToLocal();
        closeAddModal();
    }
}

function resetLibraryContainer() {
    libraryContainer.innerHTML = '';
}


function displayLibrary() {
    resetLibraryContainer();

    userLibrary.books.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML += `
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.pages}</p>
            <p>${book.read}</p>
            <p>Read Status</p>
        `
        libraryContainer.appendChild(bookCard);
    })
}

function saveToLocal() {
    localStorage.setItem('userLibrary', JSON.stringify(userLibrary.books))
}

function loadFromLocal() {
     const localStorageLibrary = localStorage.getItem('userLibrary');
     if (localStorageLibrary) {
        const localStorageBooks = JSON.parse(localStorageLibrary);
        return localStorageBooks.map(book => new Book(book.title, book.author, book.pages, book.read));
     }
     return;
}

// function deleteBook() {

// }

window.addEventListener('load', () => {
    displayLibrary();
})
