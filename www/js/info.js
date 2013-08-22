$(function() {
	$.post(volHost + "UserInfo", null, function(data) {
		alert(XML2JSON(data));
	}, "xml");
	
	$("nav ul li").click(function(e) {
        alert(e.target.id);
    });
})