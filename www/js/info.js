$(function() {
	$.post(volService + "UserInfo", {
		id: sess.getItem("user_id")
	}, function(data) {
		alert(XML2JSON(data));
	}, "xml");
	
	$("nav ul li").click(function(e) {
        alert(e.target.id);
    });
})