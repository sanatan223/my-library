const htmlBookShelf = document.querySelector(".js-book-shelf");
const htmlForm = document.querySelector(".js-form");
const htmlAddBtn = document.querySelector(".js-add-button");
const htmlCancelBtn = document.querySelector(".js-cancel-btn");
const htmlConfirmBtn = document.querySelector(".js-confirm-btn");
const htmlNameInput = document.querySelector(".js-name-input");
const htmlAuthorInput = document.querySelector(".js-author-input");
const htmlPagesInput = document.querySelector(".js-pages-input");

const myLibrary = [];
function Book(name, author, pages, status){
    this.uid = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

htmlAddBtn.addEventListener("click", () => {
    htmlForm.showModal()
    console.log("works")
})

htmlCancelBtn.addEventListener("click", () => {
    htmlForm.close()
    console.log("closed it !")
})

htmlConfirmBtn.addEventListener("click", () => {
    let name = htmlNameInput.value;
    let author = htmlAuthorInput.value;
    let pages = htmlPagesInput.value;
    let status = "not read";
    addBookToLibrary(name, author, pages, status);
    htmlForm.close();

})

function addBookToLibrary(name, author, pages, status){
    let tempBook = new Book(name, author, pages, status);
    myLibrary.push(tempBook);
    showBooks(myLibrary);
}

function showBooks(arr){
    htmlBookShelf.innerHTML = "";
    arr.forEach((book, i) => {
        htmlBookShelf.innerHTML +=`
        <div class="book">
            <img class="book-image" src="images/book.png" alt="not found">
            <div class="book-label">
                <h3>( ${i+1} )</h3>
                <div><b>Name:</b> ${book.name}</div>
                <div><b>author:</b> ${book.author}</div>
                <div><b>pages:</b> ${book.pages} </div>
            </div>
        </div>`
    });
}

showBooks(myLibrary);