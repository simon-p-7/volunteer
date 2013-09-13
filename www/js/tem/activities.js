$(function() {
	var ul = $("article ul").html("");
	$.get(temService + "Activities", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		for (var i = 0, arr; arr = d[i++];) {
			var btn = "<button type='button' id='a_" + arr[0] + "'><img src='../img/qr.png'></button>";
			ul.append("<li id='a_" + arr[0] + "'><span>" + arr[1] + "<br><span>" + arr[3] + "</span><span>" + arr[2] + "</span></span>" + btn + "</li>");
		}
	}, "xml");
	
	ul.click(function(e) {
		setItem("activity_id", e.target.id);
		redirect((e.target.type === "button" ? "scanning" : "activity") + ".html");
    });
})