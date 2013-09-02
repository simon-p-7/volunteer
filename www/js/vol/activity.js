$(function() {
	var aid = getItem("activity_id");
	aid = aid.substring(2, aid.length);
	$.get(volService + "Activity", { id: getUser(), pid: aid, had: getItem("activity_had") }, function(data) {
		var d = XML2JSON(data);
		d[22] === "0" && $("#join").remove();
		$("#team").val(d[0]);
		$("#squad").val(d[1]);
		$("#type").val(d[2]);
		$("#title").html(d[3]);
		$("#unit").val(d[4]);
		$("#array").val(d[5]);
		$("#contact").val(d[6]);
		$("#phone").val(d[7]);
		$("#number").val(d[8]);
		$("#long").val(d[9]);
		$("#content").val(d[10]);
		$("#target").val(d[11]);
		$("#claim").val(d[12]);
		$("#recruit").val(d[13]);
		$("#location").val(d[14]);
		$("#status").val(d[15]);
		$("#date").val(d[16]);
		$("#time").val(d[17] + " - " + d[18]);
		$("#participate").val(d[19]);
		$("#detail").val(d[20]);
		d[21] && $("#attachment").attr("href", filePath + d[21]).html("点击下载");
	}, "xml");
	
	$("#join").click(function(e) {
        $.get(volService + "Join", { id: getUser(), pid: aid }, function(data) {
			var d = XML2JSON(data);
			if (d[0] === 0) alert("服务器错误！", null, "对不起", "确 定");
			else {
				$("#join").hide();
				$("#participate").val(d[1]);
				alert("加入成功！", null, "恭喜你", "确 定");
			}
		}, "xml");
    });
})