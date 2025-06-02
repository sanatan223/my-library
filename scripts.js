const htmlBookShelf = document.querySelector(".js-book-shelf");

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

const book4 = new Book("book4", "someone else", 554, "read");
myLibrary.push(book4);

const veryLongBook = new Book("veryLongBook", "myself", 69, "not read");
myLibrary.push(veryLongBook);

function showBooks(arr){
    arr.forEach((book, i) => {
        htmlBookShelf.innerHTML +=`
        <div class="book">
            <img class="book-image" src="images/book.png" alt="not found">
            <div class="book-label">
                <h>( ${i+1} )</h1>
                <div><b>Name:</b> ${book.name}</div>
                <div><b>author:</b> ${book.author}</div>
                <div><b>pages:</b> ${book.pages} </div>
            </div>
        </div>`
    });
}

showBooks(myLibrary);