needAskLogout = false;
$(function() {
	var aid = getId(getItem("activity_id"));
	ajaxGet(volService + "Activity", { id: getUser(), pid: aid, had: getItem("activity_had") }, function(data) {
		var d = XML2JSON(data);
		d[19] === "0" && $("#join,#comment").remove();
		$("#team").val(d[0]);
		$("#squad").val(d[1]);
		$("#type").val(d[2]);
		$("#title").html(d[3]);
		$("#contact").val(d[4]);
		$("#phone").val(d[5]);
		$("#number").val(d[6]);
		$("#long").val(d[7]);
		$("#content").val(d[8]);
		$("#claim").val(d[9]);
		$("#recruit").val(d[10]);
		$("#location").val(d[11]);
		$("#status").val(d[12]);
		$("#date").val(d[13]);
		$("#time1").val(d[14]);
		$("#time2").val(d[15]);
		$("#participate").val(d[16]);
		$("#detail").val(d[17]);
		d[18] && $("#attachment").attr("href", filePath + d[18]).html("点击下载");
	});
	
	$("#join").click(function(e) {
        ajaxGet(volService + "Join", { id: getUser(), pid: aid }, function(data) {
			var d = XML2JSON(data);
			if (d[0] === 0) sorry("加入时出错！");
			else {
				$("#join").remove();
				$("#participate").val(d[1]);
				$("#detail").val(d[2]);
				good("加入成功！");
			}
		});
    });

	$("body").click(function(e) {
        $("#commit").css("margin-bottom", e.target.type === "textarea" ? "14em" : "1em");
        this.scrollTop = 9999999;
    });

    $("#commit").click(function(e) {
    	var time = new Date(), obj = $("#comment"), area = obj.find("textarea");
    	time = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes();
    	obj.find("ul").append("<li><div><span>" + time + "</span></div><br>" + area.val() + "</li>");
    	area.val("");
    });
})