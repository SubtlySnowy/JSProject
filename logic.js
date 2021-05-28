






  createItem= () =>{
    const entry = document.getElementById("todoinput")
    const todoitem = `<div class="todoitem"> <p> ${entry.value}</p><button class="btn btn-danger"> delete</button> </div>` 
    var divlist = document.getElementById("todolist")
    
    // InvoiceRow.getElementsByClassName('rmv')[0].addEventListener('click', removeCartItem)

    divlist.innerHTML += todoitem
    // const list = document.getElementById("todolist")
    // list.getElementsByClassName("btn btn-danger")[0].addEventListener('click', removetodo)

}

const button1  = document.getElementById('button')

button1.addEventListener("click", createItem)

// lmao.addEventListener("click", e )




const list = document.getElementById("todolist")
  

// const Deletebutton  = list.getElementsByClassName('btn btn-danger')[0]

// list.addEventListener('click', removetodo)

removetodo = () =>{
  // var buttonClicked = event.target
  // var deleteBtn = list.getElementsByClassName("btn btn-danger").length
  
  alert(deleteBtn)


}
var deleteBtn = list.getElementsByClassName("btn btn-danger")

  var btn = deleteBtn[0]
  btn.addEventListener('click',removetodo)



  // buttonClicked.parentElement.remove()
  

  // const Deletebutton  = list.getElementsByClassName('btn btn-danger')[n]
  // Deletebutton.parentElement.remove()
  // alert("Hey")



  


