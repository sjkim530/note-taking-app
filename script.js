const form = document.querySelector("form");
const input = document.querySelector("input");
const myNotes = document.getElementById("my-notes");

form.addEventListener("submit", addNote);

// Creates a new note

function addNote(e) {
  e.preventDefault();
  let newNote = document.createElement("div");
  newNote.className = "my-note";
  newNote.innerHTML = `
  <button type="button" onclick=deleteNote(this.parentNode)>X</button>
  <p> ${input.value} </p>
  <button type="button" onclick=editNote(this.parentNode)>Edit</button>
  `;
  myNotes.appendChild(newNote);
  input.value = "";
}

// Deletes the note when you click on the "X" button

function deleteNote(note) {
  note.remove();
}

// Edit the note when you click on the "Edit" button

function editNote(note) {
  const edit = note.querySelector("p");
  edit.contentEditable = true;
  edit.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      edit.contentEditable = false;
    }
  });
}
