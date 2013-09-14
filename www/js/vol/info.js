$(function() {
	doc.addEventListener("backbutton", ask, false);
	
	$.get(volService + "UserInfo", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		$("#uname").val(d[0]);
		$("#name").val(d[1]);
		$("#id").val(d[2]);
		$("#asso").val(d[3]);
		$("#team").val(d[4]);
		$("#squad").val(d[5]);
		$("#spec").val(d[6]);
		$("#unit").val(d[7]);
		$("#phone").val(d[8]);
		$("#type").val(d[9]);
		$("#email").val(d[10]);
		$("#free").val(d[11]);
		$("#edu").val(d[12]);
		$("#gender").val(d[13]);
		$("#exp").val(d[14]);
		$("#head").attr("src", skinPath + d[15]);
		$("#hour").val(d[16]);
		$("#star").val(d[17]);
	}, "xml");
	
	$("nav ul li").click(function(e) {
        redirect(e.target.id + "-activity.html");
    });
});

function ask() {
	confirm("真的要退出吗？", function(btn) { btn === 1 && nav.app.exitApp(); }, "提 示", "是,否");
}