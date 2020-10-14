const todoForm = document.querySelector(".js-todoForm"),
todoInput = todoForm.querySelector("input"),
todoList = document.querySelector(".js-todoList");

const TODOS_LS = 'toDos';

let toDos =[];



function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id)
    });
    toDos = cleanToDos
    saveToDos();
}

function saveToDos(){
    /* STring으로 바꿔서 저장함 */
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}


function paintToDo(text){
    const li =document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText =text;

    /* delBtn,span을 li의 자손으로  */
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);


    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintToDo(currentValue);
    /* input에 글자를  쓰고 엔터하면 글자 사라짐 */
    todoInput.value ="";
}
/* todos를 보이게함 */
function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !==null){
        /* string을 다시 object로 바꿈 */
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}





function init(){
loadTodos();
todoForm.addEventListener("submit",handleSubmit)
}
init();