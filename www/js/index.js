$(function() {
	$("#txt_un").focus().keydown(function(e) {
        e.which === 13 && $("#txt_pw").focus();
    });
	$("#txt_pw").keydown(function(e) {
       e.which === 13 && login(e);
    });
	$("#btn_li").click(login);
	
	function login(e) {
		setItem("user_type", $("#tem").prop("checked") ? "tem" : "vol");
		setItem("user_id", "1");
		redirect(getDir() + "info.html");
	}
	
	$("#scan").click(function(e) {
        try {
            var scanner = cordova.require("cordova/plugin/BarcodeScanner");
            scanner.scan(function(res) {
				res.cancelled || alert(res.format.toUpperCase() === "QR_CODE" ? res.text : "你扫描的不是二维码！", null, "对不起", "确 定");
            }, function(err) {
                alert("扫描失败");
            });
        } catch (ex) {
            alert("加载扫描驱动失败");
        }
    });
})