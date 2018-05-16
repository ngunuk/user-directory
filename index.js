const form = document.querySelector('#userForm')    //saved into "form"

const handleSubmit = function(ev) {     //function recieved event as an argument
  ev.preventDefault()
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value

  const renderColor = function(){

    const newDiv = document.createElement('div')
    newDiv.style.height = '6rem'
    newDiv.style.width = '3rem'
    newDiv.style.backgroundColor = favoriteColor
    return newDiv;
    
    }

 


  const nameItem = document.createElement('li')
  nameItem.textContent = `Name: ${userName}`

  const ageItem = document.createElement('li')
  ageItem.textContent = `Age: ${age}`

  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = favoriteColor
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'

  const colorItem = document.createElement('li')
  colorItem.textContent = 'Favorite Color: '
  colorItem.appendChild(colorDiv)

  const list = document.createElement('ul')
  list.appendChild(nameItem)
  list.appendChild(ageItem)
  list.appendChild(colorItem)

  const users = document.querySelector('#users')
  users.appendChild(list)

  f.reset()
  f.userName.focus()
}

form.addEventListener('submit', handleSubmit)