window.onload = myMain;

function myMain(){
    var trigger = document.getElementById("schimba");
    var loc = document.getElementById("eu");
    
    trigger.onmouseover = function() {
        loc.removeAttribute("class");
        loc.setAttribute("class", "paragrafNou");
    }
    
    var buton = document.getElementById("submit");
    var cuvant = document.getElementById("cuv");
    var text = document.getElementById("text");
    
    buton.onclick = function() {
        
        var lungime = cuvant.value.length;
        if(lungime <= 20){
            var buff = "Cuvantul cautat este: " + cuvant.value + "\n";
            var txt = text.value;
            var n = txt.search(cuvant.value);
            if(n != -1) {
                buff = buff + "Cuvantul a fost gasit";
                var RE = new RegExp(cuvant.value,"g");
                var count = txt.match(RE);  
                buff = buff + "\nCuvantul apare de " + count.length + " ori ";
            }
            else {
                buff = buff + "Cuvantul nu a fost gasit";
            }
            alert(buff);
        }
        else {
            alert("Cuvantul introdus este prea lung\nLungimea maxima este 20");
        }
    }
}
