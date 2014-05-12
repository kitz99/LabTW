// Variabile globale
    var canvas;
	var ctx; 
	var w; var h; var cw;
	var d; // directia de deplasare
	var food; var score;
	var snake_array; //Sarpele p-Zis
	var ok = true; // switch care determina game-over-ul
	var scoreLabel; var CULOARE = "blue";
	var USERNAME = "Player"; var VITEZA = 60;
	var culorile = ["#FF9933", "#66FFCC", "#FF99CC", "#9966FF", "#CCFFFF", "#666699", "#0099CC"];
	var idxCuloare = 0;
	function create_snake(){
		var length = 3; //Lungimea initiala a sarpelui
		snake_array = []; //Incepem cu vector vid
		for(var i = length-1; i>=0; i--){
			//Creare sarpe in pozitie initiala
			snake_array.push({x: i, y:0});
		}
	}

	function create_food(){
		food = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		}; // creare celula care reprezinta mancarea
	}

	function paint(){
		// Desenare canvas AICI
		ctx.fillStyle = culorile[idxCuloare];
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, w, h);
		
		//Miscarea Sarpelui
		var nx = snake_array[0].x;
		var ny = snake_array[0].y;
		//pozitia capului determinata in functie de directie
		if(d == "right") nx++;
		else if(d == "left") nx--;
		else if(d == "up") ny--;
		else if(d == "down") ny++;
		
		//Game over -> verific daca sarpele s-a lovit de perete si iau decizia
		if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw || check_collision(nx, ny, snake_array)){
			if(ok == true){ 
			   var p = document.getElementById("label");
			   p.innerHTML = "Game over! Last SCORE: " + score; 
			   var BT = document.getElementById("start");
               BT.innerHTML = "Restart game!" 
			}
		    ok = false;
			return;
		}
		
		//Sarpele mananca hrana
		if(nx == food.x&& ny == food.y){
			var tail = {x: nx, y: ny};
			score++;
			scoreLabel.text(score);
			create_food(); // generam alta celula de mancare
			if(score % 3 == 0){
				idxCuloare++;
				if(idxCuloare > 6) idxCuloare = 0;
			}
		}
		else{
			var tail = snake_array.pop();
			tail.x = nx; tail.y = ny;
		}
		snake_array.unshift(tail); //puts back the tail as the first cell
		
		for(var i = 0; i < snake_array.length; i++){
			var c = snake_array[i];
			paint_cell(c.x, c.y);
		}
		paint_cell(food.x, food.y, "food");
	}

	function paint_cell(x, y, isFood){ // coloreaza un patrat de 10 X 10 px cu acea culoare aleasa la inceput
		ctx.fillStyle = CULOARE;
		if(typeof isFood != "undefined") {
			ctx.fillStyle = "#003300";
		}
		ctx.fillRect(x*cw, y*cw, cw, cw);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*cw, y*cw, cw, cw);
	}
	function check_collision(x, y, array){ // functie care verifica daca sarpele s-a lovit de perete sau de propriul corp
		for(var i = 0; i < array.length; i++){
			if(array[i].x == x && array[i].y == y)
			 return true;
		}
		return false;
	}
	
function Game(){
	//Miscare tastatura Snake
	$(document).keydown(function(e){
		var key = e.which;
		//We will add another clause to prevent reverse gear
		if(key == "37" && d != "right" && ok==true) d = "left";
		else if(key == "38" && d != "down" && ok==true) d = "up";
		else if(key == "39" && d != "left" && ok==true) d = "right";
		else if(key == "40" && d != "up" && ok==true) d = "down";
	})

}
Game.prototype.init = function() {
	    scoreLabel = $("#scorul");
        canvas = $("#canvas")[0];
		ctx = canvas.getContext("2d");
		w = $("#canvas").width();
		h = $("#canvas").height();
		cw = 15; // dimensiune patrat sarpe
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, w, h);
		ctx.strokeStyle = "black";
		ctx.strokeRect(0, 0, w, h);
		d = "right"; //Directie predefinita
		$("#user").text(USERNAME);
		create_snake(); // desenam sarpele in pozitia initiala
		create_food(); //Desenam prima celula de mancare
		score = 0; // initializam scorul cu 0;
		ok = true; // switch ce permite inceperea jocului
        $("#start").text("Start the game");
		
		// miscarea sarpelui folosind desenari repetate in intervale stabilite in fct de dificultate
		if(typeof game_loop != "undefined") clearInterval(game_loop);
		if(ok == true) {game_loop = setInterval(paint, VITEZA);}
}

window.onload = myMain; // functia principala

function myMain(){
	var SB = $("#buttonul"); // butonul de submit al datelor din formular
	var R = $("#reluare"); // butonul de reset
	SB.click(function(){
		USERNAME= document.getElementById("username").value;
		CULOARE = $( "#culoare" ).val();
		VITEZA = parseInt($("#dificultate").val());
        var ButonStart = document.createElement('button');
        ButonStart.setAttribute("id", "start");
        document.getElementById("butoane").appendChild(ButonStart);
        document.getElementById("start").innerHTML="Start the game";
        $( "#start" ).click(function(){
			var G = new Game();
			G.init();
		});
	});

	R.click(function() {
    	location.reload();
	});
}
