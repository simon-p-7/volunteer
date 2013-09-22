$(function() {
	var ul = $("article ul").html("");
	$.get(volService + "Apply", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		for (var i = 0, arr; arr = d[i++];)
			ul.append("<li id='a_" + arr[0] + "'><span>" + arr[1] + "<br><span>" + arr[2] + "</span><span>时长：" + arr[3] + "小时</span></span></li>");
	}, "xml");
	
	ul.click(function(e) {
        var tag = e.target;
		if (tag.nodeName.toUpperCase() !== "LI") {
			while (tag.parentNode.nodeName.toUpperCase() !== "LI") tag = tag.parentNode;
			tag = tag.parentNode;
		}
		setItem("activity_id", tag.id);
		setItem("activity_had", true);
		redirect("activity.html");
    });
})