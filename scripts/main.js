/*******************************
FUNCTIONS
******************************/
var squaresPerRow = 5;
function generateGrid(numSquares, option){
	for(var i  = 0; i < numSquares * numSquares; i++)
	{		
		$("#grid").append("<div class='box'></div>");			
	}

	var width = ($("#grid").width())/ squaresPerRow;  
	
	$(".box").css({"width":width ,"height":width});	
	$(".box").on('mouseenter', function(){
		$(this).css("background", getRandomColor());
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

