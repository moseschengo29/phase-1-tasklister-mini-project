document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addToDo(e.target.new_task_description.value);
    form.reset();
  });
});

function addToDo(todo) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  btn.addEventListener("click", (event) => {
    deleteHandler(event);
  });
  btn.textContent = "x";
  li.textContent = `${todo} `;
  li.appendChild(btn);
  let list = document.querySelector("#tasks");
  list.appendChild(li);
  // console.log(list)
}

function deleteHandler(e) {
  e.target.parentNode.remove();
}
