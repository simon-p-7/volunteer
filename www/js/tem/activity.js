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
	
	ul.click(function(e) {
		var uid = getItem("activity_id");
		uid = uid.substring(2, uid.length);
		var u = $(e.target);
		confirm("确定要删除 " + u.html() + " 的服务时长吗？", function(btn) {
			alert(btn);
			/*$.get(temService + "Delete", { pid: aid, id: uid }, function(data) {
				XML2JSON(data) && u.remove();
			}, "xml");*/
		}, "提 示", "确 定,取 消");
    });
})