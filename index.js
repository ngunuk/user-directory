const form = document.querySelector('#userForm')    //saved into "form"

const handleSubmit = function(ev) {     //function recieved event as an argument
  ev.preventDefault()                   //not refrsh and reset everything
  const f = ev.target                   //access to the form you submitted
  const userName = f.userName.value        //values from the form
  const age = f.age.value
  const favoriteColor = f.favoriteColor.value
    renderlist(userName,age,favoriteColor)      //call the function
 
 
    f.reset()           //clear all input
  f.userName.focus()       //goes back to the userName input
    }
    

  
    const renderColor = function(favoriteColor){    //function created with parameter as favorite color
    const newDiv = document.createElement('div')    //newDiv created
    newDiv.style.height = '6rem'                    //style
    newDiv.style.width = '3rem'
    newDiv.style.backgroundColor = favoriteColor
    return newDiv;                                  //return newDiv
    
    }
    const renderListItem = function(entry,flag){    //function created for the listed items
    const list = document.createElement('li')       //distinguish between the name,age,favcolor
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
    return list;                //return list
    }

    const renderlist = function(userName,age,favoriteColor){            //function created
        const ul = document.createElement('ul')                 //creat the actual list
        ul.appendChild(renderListItem(userName,1))                  //add item to list
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