needAskLogout = true;
$(function() {
	ajaxGet(volService + "UserInfo", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		$("#uname").val(d[0]);
		$("#name").val(d[1]);
		$("#asso").val(d[2]);
		$("#team").val(d[3]);
		$("#squad").val(d[4]);
		$("#spec").val(d[5]);
		$("#unit").val(d[6]);
		$("#type").val(d[7]);
		$("#email").val(d[8]);
		$("#free").val(d[9]);
		$("#exp").val(d[10]);
		$("#head").attr("src", skinPath + d[11]);
		$("#hour").val(d[12]);
		$("#star").val(d[13]);
	});
	
	$("button,nav ul li").click(function(e) {
		var tag = e.target;
        redirect((tag.nodeName.toUpperCase() === "IMG" ? tag.parentNode.id : tag.id) + "-activity.html");
    });
});