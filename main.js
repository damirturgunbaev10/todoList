function addTodo() {
  const ul = document.querySelector("ul");
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if (title === "" || title.trim() === "") {
    alert("Please enter a title for the todo item.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <div> 
      <h3>${title}</h3> 
      <br> 
      <p>
        ${date || "--|--"} 
        <br> 
        ${time || "--|--"}
      </p> 
      <br> 
      <button class="done btn">Done</button> 
      <button class="edit btn">Edit</button> 
      <button class="delete btn">Delete</button>
    </div>
  `;

  li.querySelector(".done").onclick = function () {
    li.style.textDecoration = "line-through";
  };

  li.querySelector(".edit").onclick = function () {
    const newTitle = prompt("Edit the title:", title);
    if (newTitle !== null && newTitle.trim() !== "") {
      li.querySelector("h3").textContent = newTitle;
    }
  };

  li.querySelector(".delete").onclick = function () {
    li.remove();
  };

  ul.append(li);

  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
}