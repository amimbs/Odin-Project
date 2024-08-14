class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor(books) {
        this.books = books;
    }
}

// seeder data 
const dummyBooks = [
    new Book('To Kill a Mockingbird', 'Harper Lee', 281, true),
    new Book('1984', 'George Orwell', 328, false),
    new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true),
    new Book('The Catcher in the Rye', 'J.D. Salinger', 214, false),
    new Book('Pride and Prejudice', 'Jane Austen', 279, true),
    new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178, false),
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, true),
    new Book('Moby-Dick', 'Herman Melville', 635, false),
    new Book('War and Peace', 'Leo Tolstoy', 1225, true),
    new Book('Crime and Punishment', 'Fyodor Dostoevsky', 671, false),
    new Book('The Brothers Karamazov', 'Fyodor Dostoevsky', 824, true),
    new Book('Brave New World', 'Aldous Huxley', 268, false),
    new Book('Jane Eyre', 'Charlotte Brontë', 507, true),
    new Book('Wuthering Heights', 'Emily Brontë', 416, false),
    new Book('The Odyssey', 'Homer', 541, true),
    new Book('The Iliad', 'Homer', 704, false),
    new Book('The Divine Comedy', 'Dante Alighieri', 798, true),
    new Book('Ulysses', 'James Joyce', 730, false),
    new Book('Madame Bovary', 'Gustave Flaubert', 327, true),
    new Book('Don Quixote', 'Miguel de Cervantes', 1072, false)
]

const myLibrary  = new Library(dummyBooks);

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