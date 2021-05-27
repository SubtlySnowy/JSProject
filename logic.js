

removetodo = () =>{
    const Deletebutton  = document.getElementById('btn')
    alert("H")



    

}
const Deletebutton  = document.getElementsByClassName('btn')

Deletebutton.addEventListener('click', removetodo)


// const Deletebutton  = document.getElementsByClassName('btn btn-danger')
// Deletebutton.addEventListener('click', removetodo)

  createItem= () =>{
    const entry = document.getElementById("todoinput")
    const todoitem = `<div class="todoitem"> <p> ${entry.value}</p><button class="btn btn-danger"> delete</button> </div>` 
    var divlist = document.getElementById("todolist")
    

    divlist.innerHTML += todoitem
}

const button1  = document.getElementById('button')

button1.addEventListener("click", createItem)

// lmao.addEventListener("click", e )
