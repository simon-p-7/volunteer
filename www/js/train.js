$(function() {
	var ul = $("article ul").html("");
	$.post(volService + "Train", null, function(data) {
		var d = XML2JSON(data);
		for (var i = 0, arr; arr = d[i++];)
			ul.append("<li id='t_" + arr[0] + "'>" + arr[1] + " [" + arr[2] + "]</li>");
	}, "xml");
	
	ul.click(function(e) {
        setItem("train_id", e.target.id);
		setItem("train_had", false);
		redirect("train.html");
    });
})