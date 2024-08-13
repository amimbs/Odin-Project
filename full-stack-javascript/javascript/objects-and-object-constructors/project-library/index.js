class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Libaray {
    constructor(books) {
        this.books = books;
    }
}

// seeder data 
const dummyBooks = [
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, true),
    new Book('1984', 'George Orwell', 328, false),
    new Book('To Kill a Mockingbird', 'Harper Lee', 281, true),
    new Book('Moby Dick', 'Herman Melville', 635, false)
]

const myLibrary  = new Libaray(dummyBooks);

function displayLibrary() {
    let libraryContainer = document.getElementById('library-container');
    
    myLibrary.books.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML += `
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.pages}</p>
            <p>${book.read}</p>
            <button>Read Status</button>
        `
        libraryContainer.appendChild(bookCard);
    })
}

function openForm() {
    document.getElementById("newBook-Form").style.display = "block";
}

function closeForm() {
    document.getElementById("newBook-Form").style.display = "none";
  }