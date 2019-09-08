function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getAuthor = function() {
        return "An author of this book is none other then " + this.author;
    };
}
Book.prototype.changeYear = function(year) {
    this.year = year;
    //can not only change a existing in object value but also add new one
    this.changed = true;
};
var book1 = new Book("Book1", "author name", 2011);
var book2 = new Book("Book2", "author name", 1992);
var book3 = new Book("Book3", "author name", 2001);
//will change a year of an book1 object and also set new value (changed) to true
book1.changeYear(1888);
console.log(book1);

//inherit from book object
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}
Magazine.prototype = Object.create(Book.prototype);
var magazine1 = new Magazine("Magazine Name", "John Doe", 2013, "Jan");
console.log(magazine1);
console.log(magazine1.getAuthor());
//inherit an method (prototype method, if an method is declared inside book object
//it will be available for use like getAuthor method above) of book object, this
//inheritance needs to be declared before we create magazine object
console.log(magazine1.changeYear(1999));

//objects can be crated with object.create also (object of a book)
var bookProtos = {
    getAuthor2: function() {
        return "An author of this book is none other then " + this.author;
    },
    changeYear2: function(year) {
        this.year = year;
        this.changed = true;
    }
};
var book21 = Object.create(bookProtos);
book21.title = "Book2 Title";
book21.author = "Some Author";
book21.year = 2014;
//this can also be achived in a different way
var book22 = Object.create(bookProtos, {
    title: { value: "Book2 Title" },
    author: { value: "Some Author" },
    year: { value: "2014" }
});
book21.changeYear2(2017);
console.log(book21.getAuthor2());
console.log(book21);
console.log(book22);
