const htmlBookShelf = document.querySelector(".js-book-shelf");
const htmlForm = document.querySelector(".js-form");
const htmlAddBtn = document.querySelector(".js-add-button");
const htmlCancelBtn = document.querySelector(".js-cancel-btn");
const htmlConfirmBtn = document.querySelector(".js-confirm-btn");
const htmlNameInput = document.querySelector(".js-name-input");
const htmlAuthorInput = document.querySelector(".js-author-input");
const htmlPagesInput = document.querySelector(".js-pages-input");
const htmlReadBtn = document.querySelector(".js-read-btn");
const htmlNotReadBtn = document.querySelector(".js-not-read-btn");


const myLibrary = [];
function Book(name, author, pages, statuse){
    this.uid = crypto.randomUUID();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.statuse = statuse;
}

let statuse = "not read";
htmlAddBtn.addEventListener("click", () => {
    htmlForm.showModal()
})

htmlReadBtn.addEventListener("click", () => {
    statuse = "read";
    giveStyleToStatusBtn();
})
htmlNotReadBtn.addEventListener("click", () => {
    statuse = "not read";
    giveStyleToStatusBtn();
})
htmlCancelBtn.addEventListener("click", () => {
    htmlForm.close()
})

htmlConfirmBtn.addEventListener("click", () => {
    let name = htmlNameInput.value;
    let author = htmlAuthorInput.value;
    let pages = htmlPagesInput.value;
    addBookToLibrary(name, author, pages, statuse); // uses global statuse
    htmlForm.close();
    htmlNameInput.value = htmlAuthorInput.value = htmlPagesInput.value = "";
    statuse = "not read";
    giveStyleToStatusBtn();
});

function giveStyleToStatusBtn(){
    if (statuse == "read"){
        htmlReadBtn.style.backgroundColor = "green";
        htmlNotReadBtn.style.backgroundColor = "white";
    }
    else {
        htmlReadBtn.style.backgroundColor = "white";
        htmlNotReadBtn.style.backgroundColor = "red";
    }
}

function addBookToLibrary(name, author, pages, statuse){
    let tempBook = new Book(name, author, pages, statuse);
    myLibrary.push(tempBook);
    showBooks(myLibrary);
    console.log(myLibrary)
}

function showBooks(arr){
    htmlBookShelf.innerHTML = "";
    arr.forEach((book, i) => {
        htmlBookShelf.innerHTML +=`
        <div class="book">
            <img class="book-image" src="images/${book.statuse == "read"? "read" : "not-read"}-book.png" alt="not found">
            <div class="book-label">
                <h3>( ${i+1} )</h3>
                <div><b>Name:</b> ${book.name}</div>
                <div><b>author:</b> ${book.author}</div>
                <div><b>pages:</b> ${book.pages} </div>
            </div>
            <div class="book-statuse js-book-statuse-btn ${book.statuse == "read"? "read" : "not-read"}" data-book-id="${book.uid}">${book.statuse}</div>
        </div>`
    })
    activateStatuseBtn();
}

function activateStatuseBtn(){
    const htmlBookStatuseBtns = document.querySelectorAll(".js-book-statuse-btn");
    htmlBookStatuseBtns.forEach((element) => {

        let elementId = element.dataset.bookId;

        element.addEventListener("click", () => {
            myLibrary.forEach((book) => {
                if (elementId == book.uid){
                    if (book.statuse == "read"){
                        book.statuse = "not read";
                    }
                    else {
                        book.statuse = "read";
                    }
                    showBooks(myLibrary);
                }
            })
        })
    })
}

showBooks(myLibrary);
