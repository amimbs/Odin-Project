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
var Book = /** @class */ (function () {
    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    Book.prototype.info = function () {
        var readStatus = this.read ? 'read' : 'not read yet';
        return "".concat(this.title, " by ").concat(this.author, ", ").concat(this.pages, ", ").concat(readStatus);
    };
    return Book;
}());
var theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
console.log(theHobbit.info());
