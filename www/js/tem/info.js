$(function() {
	$.get(temService + "UserInfo", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		$("#uname").val(d[0]);
		$("#name").val(d[1]);
		$("#asso").val(d[2]);
		$("#team").val(d[3]);
		$("#squad").val(d[4]);
		$("#head").attr("src", teamPath + d[5]);
	}, "xml");
	
	$("nav ul li").click(function(e) {
        redirect(e.target.id + "-manager.html");
    });
});