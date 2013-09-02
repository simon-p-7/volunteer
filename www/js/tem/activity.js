$(function() {
	var aid = getItem("activity_id");
	aid = aid.substring(2, aid.length);
	var ul = $("article ul").html("");
	$.get(temService + "Activity", { pid: aid }, function(data) {
		var d = XML2JSON(data);
		$("#title").html(d[0]);
		$("#location").val(d[1]);
		$("#date").val(d[2]);
		for (var i = 0, arr; arr = d[3][i++];)
			ul.append("<li id='u_" + arr[0] + "'>" + arr[1] + "(" + arr[2] + ") [" + arr[3] + "]</li>");
	}, "xml");
})