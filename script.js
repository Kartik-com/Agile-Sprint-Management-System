// Allow drag
function allowDrop(ev) {
  ev.preventDefault();
}

// Handle the dragging event
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.target.classList.add("dragging");
}

// Handle the drop event
function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const task = document.getElementById(data);
  ev.target.appendChild(task);
  task.classList.remove("dragging");
}
