$(function() {
	var iid = window.setInterval(function(e) {
		PhoneGap.available && (window.clearInterval(iid), doc.addEventListener("backbutton", ask, false));
	}, 210);
	
	$.get(temService + "UserInfo", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		$("#uname").val(d[0]);
		$("#name").val(d[1]);
		$("#asso").val(d[2]);
		$("#team").val(d[3]);
		$("#squad").val(d[4]);
		$("#head").attr("src", teamPath + d[5]);
	}, "xml");
	
	$("#activities").click(function(e) {
        redirect(e.target.id + "-manager.html");
    });
});

function ask() {
	confirm("真的要退出吗？", function(btn) { btn === 1 && nav.app.exitApp(); }, "提 示", "是,否");
}