const form = document.querySelector("form");
const input = document.querySelector("input");
const myNotes = document.getElementById("my-notes-container");
let borderedNote = null;

form.addEventListener("submit", (e) => {
  if (myNotes.childNodes.length === 36) {
    e.preventDefault();
    input.value = "";
    return alert(
      "You are allowed max 36 notes. Please delete notes to add more notes!"
    );
  } else {
    addNote(e);
  }
});

// Creates a new note

function addNote(e) {
  e.preventDefault();
  let newNote = document.createElement("div");
  newNote.className = "parent-note";
  newNote.innerHTML = `<div class="my-note" onclick=swapNotes(this)>
  <div class="x-btn-container">
  <button type="button" class="x-button" onclick=deleteNote(this.parentNode.parentNode)>X</button>
  </div>
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
  borderedNote = null;
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
    note.style.border = "solid red";
  } else if (borderedNote === note) {
    borderedNote = null;
    note.style.border = "none";
  } else {
    const afterNoteNode = note.nextElementSibling;
    const parent = note.parentNode;
    borderedNote.replaceWith(note);
    parent.insertBefore(borderedNote, afterNoteNode);
    note.style.border = "none";
    borderedNote.style.border = "none";
    borderedNote = null;
  }
}
