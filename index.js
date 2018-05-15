const button = document.querySelector('button.greeting')

function changeText(ev){
    ev.target.textContent = 'Clickity Click'
}

function myFunction(){
    document.querySelector(".header1").innerHTML = "The Heading has Changed!"
}
button.addEventListener('click', changeText)
