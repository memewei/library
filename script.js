let myLibrary = [];
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener('click', newBook);

function Book(title, author, pages, status){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
}

function addBookToLibrary(title, author, pages, status){
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
    showBooksOnDisplay();
}

function showBooksOnDisplay(){
    const bookDisplay = document.querySelector(".display");
    bookDisplay.textContent = "";
    for(i=0; i<myLibrary.length; i++){
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card-container');
        bookDisplay.appendChild(bookCard);

        const bookTitle = document.createElement('div');
        bookTitle.textContent = myLibrary[i].title;
        bookTitle.classList.add('book-title');
        
        const bookAuthor = document.createElement('div');
        bookAuthor.textContent = myLibrary[i].author;
        bookAuthor.classList.add('book-author');

        const bookPages = document.createElement('div');
        bookPages.textContent = myLibrary[i].pages;
        bookPages.classList.add('book-pages');
        
        const bookStatus = document.createElement('div');
        bookStatus.textContent = myLibrary[i].status;
        bookStatus.classList.add('book-status');

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookStatus);
    }
}

function newBook(){
    const form = document.querySelector("#add-book-form");
    const titleInput = document.querySelector("#title-input");
    const authorInput = document.querySelector("#author-input");
    const pagesInput = document.querySelector("#pages-input");
    const statusCheck = document.querySelector("input[id='status-check']");

    if(statusCheck.checked){
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, true);
    }else{
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
    }
}

function openForm(){
    document.getElementById("add-book-form").style.display = "block";
}

function closeForm(){
    document.getElementById("add-book-form").style.display = "none";
}

addBookToLibrary("Wizard of Oz", "L. Frank Baum", 236, "not read");
addBookToLibrary("Percy Jackson and the Lightning Thief", "Rick Riordan", 377, "read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

console.log(myLibrary);