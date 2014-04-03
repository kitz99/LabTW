// Script care pune galeria in paginile cu minigalerie;
function myMain(){
    puneGaleria();
    $('#Vagapia').weatherfeed(['ROXX0049']); // plugin-ul pentru vreme
}

function getPageName(){
    var a = window.location.href; // returneaza locatie de pe disc a fisierului
    var b = a.lastIndexOf("/"); // derermina pozitia ultimului /
    var Nume =  a.substr(b + 1); // luam numele paginii
    Nume = Nume.replace(".html", ""); // eliminam extensia .html
    return Nume; // returnam numele paginii
}


function puneGaleria(){
    var place = document.getElementById("aici");
    var numePoza = getPageName();
    var k = 12;
    /* Pentru cazurile speciale */
    if(numePoza == "vanatori"){
        k = 8;
    }
    if(numePoza == "galerie"){
        k = 30;
        place = document.getElementById("galerie");
    }
    for(var i = 1; i <= k; i++){

        // creez un tag a si un tag img
        var link = document.createElement('a');
        var imagine = document.createElement('img');

        var numePozaMare = "images/" + numePoza + "B" + i + ".jpg";
        var numePozaMica = "images/" + numePoza + "S" + i + ".jpg";

        if(numePoza == "galerie") {
            numePozaMare = "images/Galerie/p" + i + "B" + ".jpg";
            numePozaMica = "images/Galerie/p" + i + "S" + ".jpg";
        }

        if(numePoza == "cetate"){
            numePozaMare = "images/cnB" + i + ".jpg";
            numePozaMica = "images/cnS" + i + ".jpg";
        }
        
        if(numePoza == "creanga"){
            numePozaMare = "images/creangaB" + i + ".jpg";
            numePozaMica = "images/creangaS" + i + ".jpg";
        }
        if(numePoza == "vanatori"){
            numePozaMare = "images/vanatoriB" + i + ".jpg";
            numePozaMica = "images/vanatoriS" + i + ".jpg";
        }
        
        if(numePoza == "varatec"){
            numePozaMare = "images/varatecB" + i + ".jpg";
            numePozaMica = "images/varatecS" + i + ".jpg";
        }
        
        // pun proprietatile la cele doua taguri
        var ahref = numePozaMare;
        link.setAttribute("href", ahref); // href-ul
        link.setAttribute("title", "Fotografie"); // title
        link.setAttribute("data-fancybox-group", "gallery2"); // apelul pentru galerie grup
        var classN = "fancybox cuPadding";
        link.setAttribute("class", classN); // stilul css

        link.setAttribute("id", i); // id
        var imgS = numePozaMica;
        imagine.setAttribute("src", imgS); // legatura la imagine
        imagine.setAttribute("alt", "Fotografie"); // alt

        place.appendChild(link); // asignam link in postura de fiu in DOM

        var A = document.getElementById(i); // localizam link-ul pe care tocmai l-am inserat
        A.appendChild(imagine); // ii asignam ca si fiu tag-ul imagine creat anterior

    }

}

window.onload = myMain;
