const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [ ];

function saveToDos( ){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  // JSON.stringify 값을 string으로 저장하고싶을때. 
  // localStorage엔 문자열만 저장할 수 있다.
  //  JSON.parse를하면 배열로 변환한다.
} 

function deleteToDo(e){
  const li = e.target.parentElement;  
  // e.target = 선택된 버튼, e.target.parentElement = 버튼의 부모 html태그
  li.remove();
}

function paintToDo(newTodo){
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos( );
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
// parsedToDos.forEach((item)=> console.log("this is turn of", item));
// array.forEach는 받아온 array를 for 반복문 없이 item(element) 하나씩 function에 넣을 수 있는 함수.