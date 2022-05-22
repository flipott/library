//Initialize variables
const addBtn = document.getElementById("add-btn");
const bookForm = document.getElementById("form-container");
const cancelBtn = document.getElementById("cancel");
const submitBtn = document.getElementById("submit");
const table = document.getElementById("table-body");
const form = document.getElementById("add-form");

//Listen to buttons
cancelBtn.addEventListener("click", hideForm);
addBtn.addEventListener("click", showForm);
submitBtn.addEventListener("click", validateForm);
document.querySelector('body').addEventListener('click', editEntry);

//Shows form
function showForm() {
    bookForm.style.display = "flex";
}

//Hides and resets form
function hideForm() {
    bookForm.style.display = "none";
    form.reset();
}

//Array that stores book objects
let myLibrary = []

//Constructs a book object
function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

testBook = new Book("John Doe", "Traveling!", 500, "Not Read");
testBookTwo = new Book("Joey Gafmen", "Spellitout", 222, "Read");
myLibrary.push(testBook);
myLibrary.push(testBookTwo);
displayBooks();

//Loops through myLibrary array and displays books accordingly
function displayBooks() {  
    let clearTable = document.getElementById('book-table').getElementsByTagName('tbody')[0]; 
    clearTable.innerHTML = '';

    for (let i=0; i<myLibrary.length; i++) {

        const author = myLibrary[i].author;
        const title = myLibrary[i].title;   
        const pages = myLibrary[i].pages;
        const readStatus = myLibrary[i].read;

        const newRow = document.createElement("tr");

        const newAuthor = document.createElement("td");
        newAuthor.innerHTML = author;
        newRow.appendChild(newAuthor);
    
        const newTitle = document.createElement("td");
        newTitle.innerHTML = title;
        newRow.appendChild(newTitle);
    
        const newPages = document.createElement("td");
        newPages.innerHTML = pages;
        newRow.appendChild(newPages);
    
        const newRead = document.createElement("td");
        newRead.innerHTML = readStatus + `<button class="change-read">Change</button>`
        newRow.appendChild(newRead);
    
        const newRemove = document.createElement("td");
        newRemove.innerHTML = `<button class="remove"></button>`;
        newRow.appendChild(newRemove);
        
        newRow.setAttribute("data-index", i);

        table.appendChild(newRow);
    }
}

//Constructs a book and adds it to the library
function addBook() {
    const author = form.elements['author'].value;
    const title = form.elements['title'].value;
    const pages = form.elements['pages'].value;
    const readStatus = form.elements['status'].value;
    const addToLibrary = new Book(author, title, pages, readStatus);

    myLibrary.push(addToLibrary);
    hideForm();
    form.reset();
    displayBooks();
}

//Edits book object according to button click
function editEntry(e) {
    let targetIndex = e.target.parentElement.parentElement.getAttribute("data-index");

    if (e.target.className == "remove") {
        myLibrary.splice(targetIndex, 1);
        displayBooks()
    } else if (e.target.className == "change-read") {
         if (e.target.previousSibling.textContent == "Not Read") {
            myLibrary[targetIndex].read = "Read";
            displayBooks();
         } else {
            myLibrary[targetIndex].read = "Not Read";
            displayBooks();
         }
    } else {
        return;
    }
}

//Makes sure correct form info is submitted
function validateForm() {
    const author = form.elements['author'].value;
    const title = form.elements['title'].value;
    const pages = form.elements['pages'].value;
    const readStatus = form.elements['status'].value;

    if (author == "" || !isNaN(author)) {
        form.elements['author'].focus();
        return false;
    } if (title == "") {
        form.elements['title'].focus();
        return false;
    } if (pages == "" || isNaN(pages)) {
        form.elements['pages'].focus();
        return false;
    } if (readStatus == "") {
        return false;
    }
    else {
        return addBook();
    }
}