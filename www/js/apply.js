$(function() {
	$.post(volService + "Apply", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		
	}, "xml");
})