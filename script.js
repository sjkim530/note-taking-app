const form = document.querySelector("form");
const input = document.querySelector("input");
const myNotes = document.getElementById("my-notes");
let borderedNote = false;

form.addEventListener("submit", addNote);

// Creates a new note

function addNote(e) {
  e.preventDefault();
  let newNote = document.createElement("div");
  newNote.className = "parent-note";
  newNote.innerHTML = `<div class="my-note" onclick=swapNotes(this)>
  <button type="button" onclick=deleteNote(this.parentNode.parentNode)>X</button>
  <p> ${input.value} </p>
  <button type="button" onclick=editNote(this.parentNode.parentNode)>Edit</button>
  </div>
  `;
  myNotes.appendChild(newNote);
  input.value = "";
}

// Delete the note when you click on the "X" button

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

// Selects the note when you click on the note.
// If same note is clicked, the note is deselected
// Else, swap notes

function swapNotes(note) {
  if (!borderedNote) {
    borderedNote = note;
    note.parentNode.style.border = "solid red";
  } else if (borderedNote === note) {
    borderedNote = null;
    note.parentNode.style.border = "none";
  } else {
    const prevNoteCopy = note.parentNode.previousSibling;
    borderedNote.replaceWith(note);
    prevNoteCopy.after(borderedNote);
    note.parentNode.style.border = "none";
    borderedNote = null;
  }
}
