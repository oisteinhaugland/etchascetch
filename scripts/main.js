/*******************************
FUNCTIONS
******************************/

//A cssHook from jquery that makes css(backgrounrColor) return as hex instead of rgb
$.cssHooks.backgroundColor = {
    get: function(elem) {
        if (elem.currentStyle)
            var bg = elem.currentStyle["backgroundColor"];
        else if (window.getComputedStyle)
            var bg = document.defaultView.getComputedStyle(elem,
                null).getPropertyValue("background-color");
        if (bg.search("rgb") == -1)
            return bg;
        else {
            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
        }
    }
}




var squaresPerRow = 5;

// function for darkening , cudos css-tricks
function LightenDarkenColor(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
}

function generateGrid(numSquares, option){
	for(var i  = 0; i < numSquares * numSquares; i++)
	{		
		$("#grid").append("<div class='box'></div>");			
	}

	var width = ($("#grid").width())/ squaresPerRow;  
	
	$(".box").css({"width":width ,"height":width});	
	
	$(".box").on('mouseenter', function(){
		if($(this).hasClass("triggered")){
			var bgColor = $(this).css("backgroundColor");
			var newColor = LightenDarkenColor(bgColor, -20); 
			$(this).css("backgroundColor", newColor);
		}
		else {
			$(this).css("backgroundColor", getRandomColor());
			$(this).addClass("triggered");
		}
		
		});
	};
		

function updateGrid(){
	$(".box").remove();
	squaresPerRow = parseInt(prompt("Enter number of squares (1-64): ",10),10);
	if (squaresPerRow > 0 && squaresPerRow <= 64 && squaresPerRow)
	{
		generateGrid(squaresPerRow);	
	}
	else
	{
		alert("That's not a valid input that was not a valid input.");
		updateGrid();
	}	

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    getRandomColor.called = true;
    return color;
}



/*******************************
Document Ready
******************************/

$(document).ready(function(){
generateGrid(squaresPerRow);


$("#clear").on('click', function(){
	updateGrid();
 });



}); //document ready end;

