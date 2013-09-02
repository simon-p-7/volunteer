$(function() {
	var ul = $("article ul").html("");
	$.get(temService + "Activities", { id: getUser() }, function(data) {
		var d = XML2JSON(data);
		for (var i = 0, arr; arr = d[i++];) {
			var btn = "<button type='button' id='ba_" + arr[0] + "'>扫描</button>";
			ul.append("<li id='a_" + arr[0] + "'>" + arr[1] + "(" + arr[2] + ") [" + arr[3] + "]" + btn + "</li>");
		}
	}, "xml");
	
	ul.click(function(e) {
		if (e.target.type === "button") {
			try {
				var scanner = cordova.require("cordova/plugin/BarcodeScanner");
				scanner.scan(function(res) {
					if (!res.cancelled)
						if (res.format.toUpperCase() === "QR_CODE") {
							alert(getId(e.target.id, 3));
							alert(res.text);
						} else sorry("你扫描的不是二维码！");
				}, function(err) {
					sorry("扫描失败！");
				});
			} catch (ex) {
				sorry("加载扫描驱动失败！");
			}
		} else {
			setItem("activity_id", e.target.id);
			redirect("activity.html");
		}
    });
})