$(function() {
	var aid = getId(getItem("activity_id"));
	var ul = $("article ul").html("");
	$.get(temService + "Project", { pid: aid }, function(data) {
		var d = XML2JSON(data);
		$("#title").html(d[0]);
		$("#location").val(d[1]);
		$("#date").val(d[2]);
	}, "xml");
	
	$("#scan").click(function(e) {
		try {
			cordova.require("cordova/plugin/BarcodeScanner").scan(function(res) {
				if (!res.cancelled)
					if (res.format.toUpperCase() === "QR_CODE") {
						var p = res.text.split("@#$");
						$("#name").val(p[0]);
						$("#id").val(p[1]);
					} else sorry("你扫描的不是二维码！");
			}, function(err) {
				sorry("扫描失败！");
			});
		} catch (ex) {
			sorry("加载扫描驱动失败！");
		}
    });
	
	$("#commit").click(function(e) {
        
    });
})