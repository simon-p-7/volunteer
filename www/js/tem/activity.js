$(function() {
	var aid = getId(getItem("activity_id"));
	var ul = $("section ul").html("");
	$.get(temService + "Activity", { pid: aid }, function(data) {
		var d = XML2JSON(data);
		$("#title").html(d[0]);
		$("#location").val(d[1]);
		$("#date").val(d[2]);
		for (var i = 0, arr; arr = d[3][i++];)
			ul.append("<li id='u_" + arr[0] + "'><span></span><span>" + arr[1] + "<br>" + arr[2] + "</span><span>" + arr[3] + "</span></li>");
	}, "xml");
	
	ul.click(function(e) {
		var u = $(e.target.parentNode);
		vibrate(210);
		confirm("确定要删除 " + u.find("span").eq(1).text() + " 的服务时长吗？", function(btn) {
			btn === 1 && $.get(temService + "Delete", { pid: aid, id: getId(u.attr("id")) }, function(data) {
				XML2JSON(data) ? u.remove() : sorry("删除时出错！");
			}, "xml");
		}, "提 示", "确 定,取 消");
    });
})