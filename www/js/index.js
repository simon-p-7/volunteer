$(function() {
	$("#txt_un").focus().keydown(function(e) {
        e.which === 13 && $("#txt_pw").focus();
    });
	$("#txt_pw").keydown(function(e) {
       e.which === 13 && login(e);
    });
	$("#btn_li").click(login);
	
	function login(e) {
		setItem("user_id", "7");
		redirect("info.html");
	}
	
	$("#scan").click(function(e) {
        try {
            var scanner = cordova.require("cordova/plugin/BarcodeScanner");
            scanner.scan(function(res) {
				res.cancelled || alert(res.format + ": " + res.text);
            }, function(err) {
                alert("err: " + err);
            });
        } catch (ex) {
            alert("ex: " + ex.message);
        }
    });
})