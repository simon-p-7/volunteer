$(function() {
	var ul = $("article ul").html("");
	$.post(volService + "Participate", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		for (var i = 0, arr; arr = d[i++];)
			ul.append("<li id='a_" + arr[0] + "'>" + arr[1] + "(" + arr[2] + ") [" + arr[3] + "]</li>");
	}, "xml");
	
	ul.click(function(e) {
        setItem("activity_id", e.target.id);
		setItem("activity_had", true);
		redirect("activity.html");
    });
})