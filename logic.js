
const lmao = document.getElementById("button")

removetodo = () =>{
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()

}

e  = () =>{
    const entry = document.getElementById("todoinput")
    const todoitem = `            <div class="todoitem"> <p> ${entry.value}</p><button class="btn btn-danger"> delete</button> </div> 
    ` 
    var divlist = document.getElementById("todolist")
    // const button  = document.getElementsByClassName('btn btn-danger')
    button.addEventListener('click', removetodo())

    divlist.innerHTML += todoitem
}

const button1  = document.getElementById('btn')

button1.addEventListener("click", e)

// lmao.addEventListener("click", e )
