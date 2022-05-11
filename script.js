const addBtn = document.getElementById("add-btn");
const bookForm = document.getElementById("form-container");
const cancelBtn = document.getElementById("cancel");
const submitBtn = document.getElementById("submit");
const table = document.getElementById("book-table");
const form = document.getElementById("add-form");


cancelBtn.addEventListener("click", hideForm);
addBtn.addEventListener("click", showForm);
submitBtn.addEventListener("click", validateForm);
document.querySelector('body').addEventListener('click', removeBook);

function showForm() {
    bookForm.style.display = "flex";
}
 
function hideForm() {
    bookForm.style.display = "none";
    form.reset();
}

let myLibrary = []

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBook() {

    const author = form.elements['author'].value;
    const title = form.elements['title'].value;
    const pages = form.elements['pages'].value;
    const readStatus = form.elements['status'].value;

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
    newRead.innerHTML = readStatus;
    newRow.appendChild(newRead);

    const newRemove = document.createElement("td");
    newRemove.innerHTML = `<button class="remove"></button>`
    newRow.appendChild(newRemove);

    const addToLibrary = new Book(author, title, pages, readStatus);
    index = myLibrary.length;
    console.log(index);
    myLibrary.push(addToLibrary);
    newRow.setAttribute("data-index", index);
    table.appendChild(newRow);
    hideForm();
    form.reset();
}

function removeBook(e) {
    if (e.target.className == "remove") {
        let tempIndex = e.target.parentElement.parentElement.getAttribute("data-index");
        console.log(tempIndex);
        myLibrary.splice(tempIndex, 1);
        e.target.parentElement.parentElement.remove();
        console.log(myLibrary);
    } else {
        return;
    }
}

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