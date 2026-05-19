//Objective : Create a Book class and use it to manage a collection of books in a library.

//Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books

class book{
    title;
    author;
    pages;
    isAvailable;
    //constructor
    constructor(title,author,pages,isAvailable){
        //intialize obj
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow(){
        return this.isAvailable;
    }
    returnBook(){
        return this.isAvailable;
    }
    getInfo(){
        return this.title,this.author,this.pages;
    }
    isLongBook(){
        if(this.pages>300){
            return true
        }
    return false
}
}
//1.create 5 book obj
let book1=new book("twisted love", "ana haung",400,true)
let book2=new book("twisted hate", "ana haung",500,true)
let book3=new book("twisted drama", "ana haung",220,true)
let book4=new book("twisted us", "ana haung",400,true)
let book5=new book("twisted me", "ana haung",300,true)
console.log(book1,book2,book3,book4,book5)
//2.
// Display info of all books
console.log("All Books:");
library.forEach(book => console.log(book.getInfo()));

//Borrow 2 books
book1.borrow();
book3.borrow();

console.log("\nAfter Borrowing:");
library.forEach(book => console.log(book.getInfo()));

//Return 1 book
book1.returnBook();

console.log("\nAfter Returning One Book:");
library.forEach(book => console.log(book.getInfo()));
//Count long books (>300 pages)
let longBooks = library.filter(book => book.isLongBook());
console.log(`\nNumber of long books: ${longBooks.length}`);

//List all available books
let availableBooks = library.filter(book => book.isAvailable);
console.log("\nAvailable Books:");
availableBooks.forEach(book => console.log(book.getInfo()));



