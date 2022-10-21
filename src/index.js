document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const textInput = document.querySelector('#new-task-description')
  const submitBtn = document.querySelector('#submitBtn')
  const tasks = document.querySelector('#tasks')

  submitBtn.addEventListener('click',(e) => {
    const li = document.createElement("li")
    const btnDel = document.createElement("button")
    btnDel.innerText = 'X'

    
    li.append(`${textInput.value} `)
    li.append(btnDel)
    tasks.append(li)

    textInput.value = '' //after submit, the input box will be removed

    e.preventDefault()

    
    btnDel.addEventListener('click', (e) => {
    
      function remove(element){
        element.parentNode.removeChild(element);
      } 
      remove(li)//after clicking the button, it will remove the li element

      e.preventDefault()

    })

  })


});
