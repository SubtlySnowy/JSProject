//Selector

const todoInput = document.querySelector("#todoinput")
const todoButton = document.querySelector("#todo-button")
const todoUl = document.querySelector("#todo-ul")
const inputText = document.getElementById("todoinput")
const DeleteButton = document.querySelector(".btn-danger")
const choice = document.querySelectorAll('input[name="choice"]')
const viewSelected = document.querySelector(".filter")
const radioinput = document.querySelector(".radiobutton")
//Event Listerns
todoButton.addEventListener("click", checkInput)
viewSelected.addEventListener("change", ShowSelected)

function checkInput(event){
  event.preventDefault()
  const validTag = returnValue(choice)
  
  if(inputText.value === null || inputText.value === ""){
    // alert("please enter a task!")
    toggleInputAnimation()
    return
  }else if(validTag === false){
    // alert("Please select a type!")
    toggleTypeAnimation()
    
    
    return
    
  }else{
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
  todoDiv.appendChild(newTodo)
  // add tag

  tag = CreateTag()
  todoDiv.appendChild(tag)

  //check button
  CheckButton = CreateCheckButton()
  todoDiv.appendChild(CheckButton)

  //trash button
  TrashButton = CreateTrashButton()
  todoDiv.appendChild(TrashButton)
  //add a span tag for the type of todo 
  todoDiv.classList.add("animate__animated","animate__backInDown")
  //append to list  
  todoUl.appendChild(todoDiv)
  //restore values of  input to none
  inputText.value = ""

}


function DeleteItem(event){
  const clickedButton = event.target
  const item = clickedButton.parentElement

  item.classList.add("animate__animated","animate__hinge")
  // item.classList.remove('todo-div')
  setInterval(function(){
    item.remove()
    // console.log("hey")
  } ,2000)
}

function CheckItem(event){
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

function CreateTag(){
  value = returnValue(choice)
  const tag = document.createElement("span")
  tag.innerHTML = value
  tag.classList.add(value)
  return tag
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
  CheckButton.addEventListener("click", CheckItem)

  return CheckButton

}

function ShowSelected(event){
  const selected = event.target.value
  console.log(selected)

  if(selected === "all"){
    ShowAll()
  }else if(selected==="completed"){
    console.log("completed")
    ShowCompleted()
  }else if(selected === "uncompleted"){
    ShowUncompleted()
  }
}

function ShowCompleted(){
  const tododiv = todoUl.querySelectorAll(".todo-div")
  tododiv.forEach(e => {
    if(!e.classList.contains("completed")){
      e.classList.add("hide")
    }else if(e.classList.contains("completed")){
      e.classList.remove("hide")
    }
  })

}

function ShowUncompleted(){
  const tododiv = todoUl.querySelectorAll(".todo-div")
  tododiv.forEach(e => {
    if(e.classList.contains("completed")){
      e.classList.add("hide")
    }else if(!e.classList.contains("completed")){
      e.classList.remove("hide")
    }
})}


function ShowAll(){
  const tododiv = todoUl.querySelectorAll(".todo-div")
  tododiv.forEach(e => {
    if(e.classList.contains("hide")){
      e.classList.remove("hide")
    }
  });
}

function toggleInputAnimation(){
  setTimeout(function(){
    inputText.classList.add("animate__animated","animate__shakeX","warning")
  })
  inputText.addEventListener('animationend', () =>{inputText.classList.remove("animate__animated","animate__shakeX","warning") } )
  
}

function toggleTypeAnimation(){
  setTimeout(function(){
    radioinput.classList.add("animate__animated","animate__shakeX")
    
  })
  radioinput.addEventListener('animationend', () =>{ radioinput.classList.remove("animate__animated","animate__shakeX")
} )
  
}