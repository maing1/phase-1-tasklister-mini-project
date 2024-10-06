document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  buildToDo(e.target.new-task-description.value)
  form.reset
})


function buildToDo(toDo){
  let done = document.createElement('p')
  let button =document.createElement('button')
  button.addEventListener('click', handleDelete)
  button.textContent = 'X'
  done.textContent = `${toDo}`
  done.appendChild(button)
  console.log(done)
   document.querySelector('#list').appendChild(done)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
});


