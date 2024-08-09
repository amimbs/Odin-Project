"use strict";
// function Book(title: string, author: string, pages: number, read: boolean) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//         return this.title, this.author, this.pages, this.read
//     }
// }
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
// console.log(theHobbit.info());
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        const readStatus = this.read ? 'read' : 'not read yet';
        return `${this.title} by ${this.author}, ${this.pages}, ${readStatus}`;
    }
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
console.log(theHobbit.info());
