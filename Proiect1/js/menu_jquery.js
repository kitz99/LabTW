window.onload = myMain;

function myMain(){
    var Button = document.getElementsByTagName("button");
    for(var i = 0; i < Button.length; i++){
        if(Button[i].innerText == "Subscribe"){
            Button[i].setAttribute("class", "subscribe");
            Button[i].onclick = afiseaza;
        }
    }
}

function afiseaza(){
    alert("Site realizat de Bogdan Mihai Timofte, Grupa 233 - Laboratorul de Tehnici Web");
}