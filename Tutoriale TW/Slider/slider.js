//js
window.onload = myMain;

function myMain() {
	var sliderUL = $("div.slider").children("ul");
	var imgs = sliderUL.find("img");
	var imgWidth = imgs[0].width;
	var imgsLen = imgs.length;
	var current = 1;
	var totalImgsWidth = imgWidth * imgsLen;
	
	$('#slider-nav').show().find('button').on('click', function() {
		var direction = $(this).data('dir'),
			loc = imgWidth; // 

		// update current value
		( direction === 'next' ) ? ++current : --current;

		// if first image
		if ( current === 0 ) {
			current = imgsLen;
			loc = totalImgsWidth - imgWidth; // 
			direction = 'next';
		} else if ( current - 1 === imgsLen ) { // 
			current = 1;
			loc = 0;
		}

		transition(sliderUL, loc, direction);
	});
	
	function transition(container, loc, direction){
		var unit;
		
		if(direction && loc !== 0){
			unit = (direction === "next") ? "-=" : "+=";
		}
		
		container.animate({
				"margin-left": unit ? (unit + loc) : loc 
		});
	}
	
}