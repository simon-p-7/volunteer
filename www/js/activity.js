$(function() {
	var pid = getItem("activity_id").substring(2, pid.length);
	alert(pid);
	$.post(volService + "Activity", {
		pid: pid
	}, function(data) {
		var d = XML2JSON(data);
		alert(d);
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
		d[21] && $("#attachment").attr("href", filePath + d[21]);
	}, "xml");
})