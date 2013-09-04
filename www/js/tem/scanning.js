$(function() {
	var aid = getId(getItem("activity_id"));
	$.get(temService + "Project", { pid: aid }, function(data) {
		var d = XML2JSON(data);
		d[3] || remove();
		$("#title").html(d[0]);
		$("#location").val(d[1]);
		$("#date").val(d[2]);
		$("#scan").click();
	}, "xml");
	
	$("#scan").click(function(e) {
		try {
			cordova.require("cordova/plugin/BarcodeScanner").scan(function(res) {
				if (!res.cancelled)
					if (res.format.toUpperCase() === "QR_CODE") {
						var p = res.text.split("#");
						$("#name").val(p[0]);
						$("#uname").val(p[1]);
						$("#id").val(p[2]);
					} else sorry("你扫描的不是二维码！");
			}, function(err) { sorry("扫描失败！"); });
		} catch (ex) { sorry("加载扫描驱动失败！"); }
    });
	
	$("#commit").click(function(e) {
        $.get(temService + "Recognized", { id: $("#uname").val(), pid: aid }, function(data) {
			var d = XML2JSON(data);
			$("#name").val("");
			$("#uname").val("");
			$("#id").val("");
			d[0] === 0 ? sorry("志愿者不存在！\n或\n重复提交！") : d[1] && confirm("提交成功！\n是否须要继续扫描？", function(btn) { btn === 1 && $("#scan").click(); }, "提 示", "是,否");
			d[1] || remove();
		}, "xml");
    });
	
	function remove() {
		$("#scan").remove();
		$("#commit").remove();
	}
})