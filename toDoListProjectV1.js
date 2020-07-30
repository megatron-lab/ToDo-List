// $("li").click(function(){
// 	// $(this).css("text-decoration", "line-through");
// 	// $(this).css("color", "gray");

// 	if($(this).css("color")==="rgb(128, 128, 128)"){
// 		$(this).css({
// 		color: "black",
// 		textDecoration: "none"
// 	});
// 	}
// 	else{
// 	$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	});
// 	}
// });

//can only add a listener using jQuery on elements that exist when this code
//runs the first time, when run code for first time it does not have everything when add to click listener it only adds to those three
//check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//code only runs when a span is clicked inside of a ul
//click on X to delete toDo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		//this on bottom refers to li not the span
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
	if(event.which===13)
	{
		//grabbing new todo text from input
		 var todoText=$(this).val();
		 //this makes it act as a setter rather than just as a getter
		 $(this).val("");
		 //create a new li and add to ul
		 $("ul").append("<li><span><i class='fas fa-trash'></i></span> " +todoText+ "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
