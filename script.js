const form = document.querySelector("form");
const input = document.querySelector("input");
const myNotes = document.getElementById("my-notes");

form.addEventListener("submit", addNote);

function addNote(e) {
  e.preventDefault();
  let newNote = document.createElement("div");
  newNote.className = "my-note";
  newNote.innerHTML = `
  <button type="button">X</button>
  <p> ${input.value} </p>
  <button type="button">Edit</button>
  `;
  myNotes.appendChild(newNote);
  input.value = "";
}
