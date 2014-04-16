window.onload = myMain;
var myWindow;

function myMain(){
    
    var buton = document.getElementById("buton");
    
    buton.addEventListener ("click", myFunct, false);
    
    //localStorage.setItem("Parinte", mesaj.value);
}

function myFunct() {
    alert("Butonul va deschide o pagina noua");
    var mesaj = document.getElementById("place");
    //localStorage.setItem("Parinte", mesaj.value);
    myWindow = window.open("pag_copil.html","myWindow","width=200,height=100");
    
    myWindow.onload = comunica;
    //myWindow.document.write("<p>" + localStorage.getItem('Parinte') + "</p>");                
    //myWindow.opener.document.write("<p>This is the source window!</p>");
}

function comunica(){
    //var butonCopil = myWindow.document.getElementById("buntonas");
    /* butonCopil.onclick = function(){
        alert("ion");
    } */
    
    alert("ion");
    myWindow.opener.alert("ion");
}
