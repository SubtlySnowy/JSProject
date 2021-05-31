//Selector

const todoInput = document.querySelector("#todoinput")
const todoButton = document.querySelector("#todo-button")
const todoUl = document.querySelector("#todo-ul")
const inputText = document.getElementById("todoinput")
const DeleteButton = document.querySelector(".btn-danger")
// const entry = document.getElementById("todoinput")

//Event Listerns

todoButton.addEventListener("click", addToDo)



//Hello how are you today? are uou doing good? I  believe so HOw sit ahtkkk 
//Functions

function addToDo(event){
  event.preventDefault()
  //ToDoDiv
  const todoDiv = document.createElement('div')
  todoDiv.classList.add("todo-div")
  //create todo
  const newTodo =  document.createElement('li')
  newTodo.innerText = inputText.value
  newTodo.classList.add("todo-item")

  todoDiv.appendChild(newTodo)
  //check button
  const completedButton = document.createElement("button")
  completedButton.innerHTML = ` <i class="fas fa-check"></i>`
  completedButton.classList.add("btn")
  completedButton.classList.add("btn-success")
  completedButton.addEventListener("click", printitems)
  todoDiv.appendChild(completedButton)
  //trash button
  const TrashButton = document.createElement("button")
  TrashButton.innerHTML = ` <i class="fas fa-trash-alt"></i>`
  TrashButton.classList.add("btn")
  TrashButton.classList.add("btn-danger")
  TrashButton.addEventListener("click", DeleteItem )
  todoDiv.appendChild(TrashButton)

  //append to list
  
  todoUl.appendChild(todoDiv)
  inputText.value = ""


}


function DeleteItem(event){
  const clickedButton = event.target
  
  const item = clickedButton.parentElement
  item.classList.add("falling")
  // item.remove()

  item.addEventListener("transitionend", function(){
    console.log("ended")
      item.remove()
      // alert("H")

  }, false)
}

function printitems(event){
  clickedButton = event.target
  clickedButton.parentElement.classList.toggle("completed")
}



//   createItem= () =>{
//     const todocontainer = document.getElementById("todolist")
//     const entry = document.getElementById("todoinput")
//     const todoitem = `
//     <li>
//     <div class="todoitem"> ${entry.value} <button id="btn" class="btn btn-danger"> <i class="fas fa-trash-alt"></i></button> </div> 

// </li>    ` 
//     var divlist = document.getElementById("todo-ul")
    
//     // InvoiceRow.getElementsByClassName('rmv')[0].addEventListener('click', removeCartItem)

//     divlist.innerHTML += todoitem
//     // const list = document.getElementById("todolist")
//     // list.getElementsByClassName("btn btn-danger")[0].addEventListener('click', removetodo)

// }

// const button1  = document.getElementById('button')

// button1.addEventListener("click", createItem)

// // lmao.addEventListener("click", e )




// const list = document.getElementById("todolist")
  

// // const Deletebutton  = list.getElementsByClassName('btn btn-danger')[0]

// // list.addEventListener('click', removetodo)

// removetodo = () =>{
//   // var buttonClicked = event.target
//   // var deleteBtn = list.getElementsByClassName("btn btn-danger").length
  
//   alert(deleteBtn)


// }
// var deleteBtn = list.getElementsByClassName("btn btn-danger")

//   var btn = deleteBtn[0]
//   btn.addEventListener('click',removetodo)



//   // buttonClicked.parentElement.remove()
  

//   // const Deletebutton  = list.getElementsByClassName('btn btn-danger')[n]
//   // Deletebutton.parentElement.remove()
//   // alert("Hey")



  


