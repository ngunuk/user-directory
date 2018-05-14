const button = document.querySelector('button.greeting')

function changeText(){
    const paragraph = document.querySelector('p.greeting')
    paragraph.textContent = 'you done clicked'
}

button.addEventListener('click', changeText)
