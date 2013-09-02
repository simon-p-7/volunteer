$(function() {
	var ul = $("article ul").html("");
	$.get(temService + "Activities", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		for (var i = 0, arr; arr = d[i++];) {
			var btn = "<button type='button'>扫描</button>";
			ul.append("<li id='a_" + arr[0] + "'>" + arr[1] + "(" + arr[2] + ") [" + arr[3] + "]" + btn + "</li>");
		}
	}, "xml");
	
	ul.click(function(e) {
		if (e.target.type === "button") {
			alert(e.target.parent.id);
		} else {
			setItem("activity_id", e.target.id);
			redirect("activity.html");
		}
    });
})