class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

        this.info = function () {
            const readStatus = this.read ? "read" : "not read yet";
            return `${this.title} by ${this.author}, ${this.pages}, ${readStatus}`;
        };
    }
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
console.log(theHobbit.info());

// const myLibrary = [];

// function Book() {
//   // the constructor...
// }

// function addBookToLibrary() {
//   // do stuff here
// }
