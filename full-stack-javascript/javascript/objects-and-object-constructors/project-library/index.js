class Book {
    constructor(title = '', author = '', pageCount = 0, isRead = false) {
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
        this.isRead = isRead;
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
    const pageCount = addForm.elements.pageCount.value
    const isRead = addForm.elements.isRead.checked
    return new Book(title, author, pageCount, isRead)
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
        const title = document.createElement('h2');
        const author = document.createElement('h3');
        const pageCount = document.createElement('p');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.disabled = true;

        title.textContent = book.title;
        author.textContent = book.author;
        pageCount.textContent = book.pageCount;
        checkBox.checked = book.isRead;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pageCount);
        bookCard.appendChild(checkBox);

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
        return localStorageBooks.map(book => new Book(book.title, book.author, book.pageCount, book.isRead));
     }
     return;
}

// function deleteBook() {

// }

window.addEventListener('load', () => {
    displayLibrary();
})
