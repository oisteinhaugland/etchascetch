$(document).ready(function(){
var max = 240;
for (i=0;i<max;i++){
	$("#wrapper").html($("#wrapper").html() +"<div class='box'></div>");
};


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

var startingColor = $(this).css("background", "white");
$(".box").on('mouseenter', function(){
	
	if (startingColor){
		$(this).css("background", getRandomColor());

	}
	else {
		$(this).css("background","blue");
	}
	});

}); //document ready end;

