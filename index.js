const button = document.querySelector('button.greeting')

button.addEventListener('click', changeText)
    function changeText(ev){
    ev.target.textContent = 'Clickity Click'
    }

function myFunction(){
    document.querySelector(".header1").innerHTML = "The Heading has Changed!"
}


function newText(){
    var x = document.getElementById("writeText").value;
    document.getElementById("header3").innerHTML = x;
}

