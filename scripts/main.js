/*******************************
FUNCTIONS
******************************/
var squaresPerRow = 10;
function generateGrid(numSquares, option){
	for(var i  = 0; i < numSquares * numSquares; i++)
	{		
		$("#grid").append("<div class='box'></div>");			
	}

	var width = ($("#grid").width())/ squaresPerRow;  
	
	$(".box").css({"width":width ,"height":width});	
		
};

function updateGrid(){
	$(".box").remove();

	squaresPerRow = parseInt(prompt("Enter number of squares (1-64): ",50),10);
	if (squaresPerRow > 0 && squaresPerRow <= 64)
	{

		generateGrid(squaresPerRow);	
	}
	else
	{
		alert("Sorry that was not a valid input.");
	}	

}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }

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

$(".box").on('mouseenter', function(){
		$(this).css("background", getRandomColor());
	});

}); //document ready end;

