let myLibrary = [];
const submitBtn = document.getElementById("submit-btn");
const form = document.querySelector("#add-book-form");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const statusCheck = document.querySelector("input[id='status-check']");

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

        let removeBtn = document.createElement('span');
        removeBtn.classList.add('remove');
        removeBtn.innerHTML = '<i class="uil uil-times" id="remove-btn" onclick="removeBook()"></i>';

        const detailDisplay = document.createElement('div');
        detailDisplay.classList.add('text-container');

        const bookTitle = document.createElement('div');
        bookTitle.textContent = `Title: ${myLibrary[i].title}`;
        bookTitle.classList.add('book-title');
        
        const bookAuthor = document.createElement('div');
        bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
        bookAuthor.classList.add('book-author');

        const bookPages = document.createElement('div');
        bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
        bookPages.classList.add('book-pages');
        
        const bookStatus = document.createElement('div');
        bookStatus.textContent = `Finished reading?: ${myLibrary[i].status}`;
        bookStatus.classList.add('book-status');

        bookCard.appendChild(removeBtn);
        bookCard.appendChild(detailDisplay);
        detailDisplay.appendChild(bookTitle);
        detailDisplay.appendChild(bookAuthor);
        detailDisplay.appendChild(bookPages);
        detailDisplay.appendChild(bookStatus);
    }
}

function newBook(){
    if(statusCheck.checked){
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, "Yes");
    }else{
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, "No");
    }
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    statusCheck.checked = false;
}

function openForm(){
    document.getElementById("add-book-form").style.display = "block";
}

function closeForm(){
    document.getElementById("add-book-form").style.display = "none";
}

function removeBook(){
    console.log("it works");
}

addBookToLibrary("Wizard of Oz", "L. Frank Baum", 236, "No");
addBookToLibrary("Percy Jackson and the Lightning Thief", "Rick Riordan", 377, "Yes");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "No");

console.log(myLibrary);