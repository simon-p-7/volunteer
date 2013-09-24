needAsk = false;
$(function() {
	var ul = $("article ul").html("");
	ajaxGet(temService + "Activities", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		for (var i = 0, arr; arr = d[i++];) {
			var btn = "<button type='button' id='a_" + arr[0] + "'><img src='../img/qr.png'></button>";
			ul.append("<li id='a_" + arr[0] + "'><span>" + arr[1] + "<br><span>" + arr[3] + "</span><span>" + arr[2] + "</span></span>" + btn + "</li>");
		}
	});
	
	ul.click(function(e) {
		var tag = e.target;
		if (tag.nodeName.toUpperCase() !== "LI") {
			while (tag.parentNode.nodeName.toUpperCase() !== "LI") tag = tag.parentNode;
			tag = tag.parentNode;
		}
		setItem("activity_id", tag.id);
		redirect((e.target.type === "button" || e.target.parentNode.type === "button" ? "scanning" : "activity") + ".html");
    });
})