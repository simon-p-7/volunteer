$(function() {
	var pid = getItem("activity_id");
	$.post(volService + "Activity", {
		pid: pid.substring(2, pid.length)
	}, function(data) {
		var d = XML2JSON(data);
		
	}, "xml");
})