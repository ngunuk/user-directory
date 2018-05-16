const form = document.querySelector('#userForm')    //saved into "form"

const handleSubmit = function(ev) {     //function recieved event as an argument
  ev.preventDefault()
  const f = ev.target
  const userName = f.userName.value
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value
    renderlist(userName,age,favoriteColor)
 
 
    f.reset()
  f.userName.focus()
    }
    

  
    const renderColor = function(favoriteColor){
    const newDiv = document.createElement('div')
    newDiv.style.height = '6rem'
    newDiv.style.width = '3rem'
    newDiv.style.backgroundColor = favoriteColor
    return newDiv;
    
    }
    const renderListItem = function(entry,flag){
    const list = document.createElement('li')
    if(flag==1){
        list.textContent = `Name: ${entry}` 
    }
    else if(flag==2){
        list.textContent = `Age: ${entry}`
    }
    else if(flag ==3){
        list.textContent =`Color: `
        list.appendChild(renderColor(entry));
    }
    return list;
    }

    const renderlist = function(userName,age,favoriteColor){
        const ul = document.createElement('ul')
        ul.appendChild(renderListItem(userName,1))
        ul.appendChild(renderListItem(age,2))
        ul.appendChild(renderListItem(favoriteColor,3))
        users.appendChild(ul)
    }

  /*const nameItem = document.createElement('li')
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
*/

form.addEventListener('submit', handleSubmit)