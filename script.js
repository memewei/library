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

function removeBookFromLibrary(i){
    myLibrary.splice(i, 1);
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
        removeBtn.innerHTML = `<i class="uil uil-times" id="remove-btn" onclick="removeBookFromLibrary(${i})"></i>`;

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
        
        const toggleStatus = document.createElement('div');
        let placeholderText = "";
        if(myLibrary[i].status === true){
            placeholderText = "Read";
        }else if(myLibrary[i].status === false){
            placeholderText = "Not read";
        }else{
            return;
        }
        toggleStatus.innerHTML = `<button id="toggle-btn" onclick="toggleRead(${i})">${placeholderText}</button>`;
        toggleStatus.classList.add('toggle-status');

        bookCard.appendChild(removeBtn);
        bookCard.appendChild(detailDisplay);
        bookCard.appendChild(toggleStatus);
        detailDisplay.appendChild(bookTitle);
        detailDisplay.appendChild(bookAuthor);
        detailDisplay.appendChild(bookPages);
    }
}

function newBook(){
    if(statusCheck.checked){
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, true);
    }else{
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
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

function clearDisplay(){
    bookDisplay.innerHTML = "";
}

function toggleRead(i){
    if(myLibrary[i].status === true){
        myLibrary[i].status = false;
    }else{
        myLibrary[i].status = true;
    }
    showBooksOnDisplay();
}

addBookToLibrary("Wizard of Oz", "L. Frank Baum", 236, false);
addBookToLibrary("Percy Jackson and the Lightning Thief", "Rick Riordan", 377, true);
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(myLibrary);