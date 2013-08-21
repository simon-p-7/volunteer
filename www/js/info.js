$(function() {
	$.post(volHost + "UserInfo", null, function(data) {
		alert(XML2JSON(data).length);
	}, "xml");
	
	$("button").click(function(e) {
        alert(e.target.id);
    });
})