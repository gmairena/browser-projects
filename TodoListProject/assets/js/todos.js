//Check off specific Todo's by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//listen is added to entire ul parent
//since the new li's done exist yet

//Click on X to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
//stopPropagation stops event bubbling from happening
});

$("input[type='text']").keypress(function(){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText =  $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});