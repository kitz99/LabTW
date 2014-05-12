// Javascript
window.onload = myMain;

function myMain() {
	$("#patrat").dblclick(function(){
		alert("Am dat dublu click");
		$(document).keydown(function(e){
			var key = e.which;
			if(key == "37"){
				var actual = $("#patrat").css("left");
				actual = parseInt(actual) - 5;
				$("#patrat").css("left", actual+"px");
			} 
			else if(key == "38"){
				var actual = $("#patrat").css("top");
				actual = parseInt(actual) - 5;
				$("#patrat").css("top", actual+"px");
			}
			else if(key == "39"){
				var actual = $("#patrat").css("left");
				actual = parseInt(actual) + 5;
				$("#patrat").css("left", actual+"px");
			}
			else if(key == "40"){
				var actual = $("#patrat").css("top");
				actual = parseInt(actual) + 5;
				$("#patrat").css("top", actual+"px");
			}
		});
	});
}