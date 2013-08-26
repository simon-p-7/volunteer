$(function() {
	var ul = $("article ul").html("");
	$.post(volService + "Launch", null, function(data) {
		var d = XML2JSON(data);
		for (var i = 0, arr; arr = d[i++];)
			ul.append("<li id='a_" + arr[0] + "'>" + arr[1] + " [" + arr[2] + "]</li>");
	}, "xml");
	
	ul.click(function(e) {
        setItem("activity_id", e.target.id);
		setItem("activity_had", false);
		redirect("activity.html");
    });
})