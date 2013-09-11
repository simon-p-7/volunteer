$(function() {
	var aid = getId(getItem("activity_id"));
	var ul = $("article ul").html("");
	$.get(temService + "Activity", { pid: aid }, function(data) {
		var d = XML2JSON(data);
		$("#title").html(d[0]);
		$("#location").val(d[1]);
		$("#date").val(d[2]);
		for (var i = 0, arr; arr = d[3][i++];)
			ul.append("<li id='u_" + arr[0] + "'><div></div>" + arr[1] + "(" + arr[2] + ") [" + arr[3] + "]</li>");
	}, "xml");
	
	ul.click(function(e) {
		var u = $(e.target);
		vibrate(210);
		confirm("确定要删除 " + u.html() + " 的服务时长吗？", function(btn) {
			btn === 1 && $.get(temService + "Delete", { pid: aid, id: getId(e.target.id) }, function(data) {
				XML2JSON(data) ? u.remove() : sorry("删除时出错！");
			}, "xml");
		}, "提 示", "确 定,取 消");
    });
})