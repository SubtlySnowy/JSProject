//Selector

const todoInput = document.querySelector("#todoinput")
const todoButton = document.querySelector("#todo-button")
const todoUl = document.querySelector("#todo-ul")
const inputText = document.getElementById("todoinput")
const DeleteButton = document.querySelector(".btn-danger")
// const task = document.querySelector("#task")
const choice = document.querySelectorAll('input[name="choice"]')
// const entry = document.getElementById("todoinput")

//Event Listerns

todoButton.addEventListener("click", checkInput)


function checkInput(event){
  event.preventDefault()
  const validTag = returnValue(choice)
  
  console.log(validTag)
  // console.log(valid)
  if(inputText.value === null || inputText.value === ""){
    alert("please enter a task!")
    return
  }else if(validTag === false){
    alert("Please select a type!")
    return
    
  }else{
    console.log(inputText.value)
    addToDo(event)
  }
}




function addToDo(event){
  event.preventDefault()
  //ToDoDiv
  const todoDiv = document.createElement('div')
  todoDiv.classList.add("todo-div")
  //create todo
  const newTodo =  document.createElement('li')
  newTodo.innerHTML = inputText.value
  newTodo.classList.add("todo-item")
  // todoDiv.classList.add("validTask")

  todoDiv.appendChild(newTodo)
  // add tag

  value = returnValue(choice)
  const tag = document.createElement("span")
  tag.innerHTML = value
  tag.classList.add(value)
  todoDiv.appendChild(tag)

  //check button
  CheckButton = CreateCheckButton()
  todoDiv.appendChild(CheckButton)

  //trash button
  TrashButton = CreateTrashButton()
  todoDiv.appendChild(TrashButton)
  //add a span tag for the type of todo 
  

  //append to list  
  todoUl.appendChild(todoDiv)
  inputText.value = ""
  value = ""



}


function DeleteItem(event){
  const clickedButton = event.target
  const item = clickedButton.parentElement
  item.classList.add("falling")
  setInterval(function(){
    item.remove()
  } ,400)
}

function printitems(event){
  clickedButton = event.target
  clickedButton.parentElement.classList.toggle("completed")
}

function returnValue(choice){
  for(const c of choice){
    if(c.checked){
      return c.value
    }
  }
    if(choice[2].checked == false){
      return false
    }
  
}


function CreateTrashButton(){
  const TrashButton = document.createElement("button")
  TrashButton.innerHTML = ` <i class="fas fa-trash-alt"></i>`
  TrashButton.classList.add("trashbutton")
  TrashButton.addEventListener("click", DeleteItem )

  return TrashButton
}


function CreateCheckButton(){
  const CheckButton = document.createElement("button")
  CheckButton.innerHTML = ` <i class="fas fa-check"></i>`
  CheckButton.classList.add("checkbutton")
  CheckButton.addEventListener("click", printitems)

  return CheckButton

}