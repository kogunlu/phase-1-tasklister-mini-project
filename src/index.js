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
    btnDel.style.marginLeft = '1em'
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


    const dropDown = document.createElement('select')
    dropDown.style.marginLeft = '1em'
    li.append(dropDown)

    const high = document.createElement('option')
    high.innerText = 'High'
    high.value = 'high'

    const medium = document.createElement('option')
    medium.innerText = 'Medium'
    medium.value = 'medium'


    const low = document.createElement('option')
    low.innerText = 'Low'   
    low.value = 'low'




    dropDown.ariaLabel = "Books nad Snippets"
      const subGroup = document.createElement('optgroup')
        dropDown.append(subGroup)
        subGroup.label = 'Select importance'


dropDown.append(high)
dropDown.append(medium)
dropDown.append(low)

    dropDown.addEventListener('change', (e) => {
      if(e.target.value === "high"){
      li.style.color = 'red'
      }else if(e.target.value === "medium"){
      li.style.color = 'orange'
      }else if(e.target.value === "low"){
      li.style.color = 'green'
      }
      console.log(e.target)
    })

  })


  

});
