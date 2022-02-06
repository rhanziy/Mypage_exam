const form = document.getElementById("foodForm");
const list = document.getElementById("foodList");
const input = document.querySelector("#foodForm input");


let foods = [];

function showList(food){
  const li = document.createElement("li")
  const span = document.createElement("span");
  span.innerText = food;
  console.log(span);
  li.appendChild(span);
  list.appendChild(li);
}

function addList(e){
  e.preventDefault();
  const food = input.value;
  foods.push(food);
  input.value = '';
  showList(food);
}

form.addEventListener("submit", addList);