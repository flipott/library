const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove")
const bookForm = document.getElementById("form-container");
const cancelBtn = document.getElementById("cancel");
const submitBtn = document.getElementById("submit");
const table = document.getElementById("book-table")


cancelBtn.addEventListener("click", hideForm);
addBtn.addEventListener("click", showForm);
submitBtn.addEventListener("click", addBook);

function showForm() {
    bookForm.style.display = "flex";
}

function hideForm() {
    bookForm.style.display = "none";
}

function addBook() {
    const newRow = document.createElement("tr");

    const newAuthor = document.createElement("td");
    newAuthor.innerHTML = "JK Rowling"
    newRow.appendChild(newAuthor);

    const newTitle = document.createElement("td");
    newTitle.innerHTML = "Harry Potter 2"
    newRow.appendChild(newTitle);

    const newPages = document.createElement("td");
    newPages.innerHTML = "555"
    newRow.appendChild(newPages);

    const newRead = document.createElement("td");
    newRead.innerHTML = "No"
    newRow.appendChild(newRead);

    const newRemove = document.createElement("td");
    newRemove.innerHTML = "<button>x</button>"
    newRow.appendChild(newRemove);

    table.appendChild(newRow);

    hideForm();    
}


// bookForm.style.display = "flex";