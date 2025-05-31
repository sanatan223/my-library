const myLibrary = [];
function Book(name, author, pages, status){
    this.uid = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const book1 = new Book("book1", "bot1", 503, "not read");
myLibrary.push(book1);

const book2 = new Book("book2", "bot2", 703, "read");
myLibrary.push(book2);

const book3 = new Book("book3", "bot3", 205, "not read");
myLibrary.push(book3);


console.log(myLibrary)