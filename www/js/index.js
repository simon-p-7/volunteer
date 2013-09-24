$(function() {
	$("#tem").prop("checked", true);
	
	$("body").click(function(e) {
        $("article").css("margin-top", (e.target.type && e.target.type !== "radio") ? "-15.5em" : "0");
    });
	
	$("#txt_un").keydown(function(e) {
        e.which === 13 && $("#txt_pw").focus();
    });
	$("#txt_pw").keydown(function(e) {
       e.which === 13 && login(e);
    });
	$("#btn_li").click(login);
	
	$("#vol,#tem").change(function(e) {
        $(e.target).next().removeClass("unchecked").addClass("checked");
		$("#" + (e.target.id == "vol" ? "tem" : "vol")).next().removeClass("checked").addClass("unchecked");
    });
	
	function login(e) {
		var isTem = $("#tem").prop("checked");
		ajaxGet((isTem ? temService : volService) + "Login", {
			un: $("#txt_un").val(), pw: $("#txt_pw").val()
		}, function(data) {
			var d = XML2JSON(data);
			if (!d) sorry("登录失败！");
			else {
				setItem("user_type", isTem ? "tem" : "vol");
				setItem("user_id", d);
				redirect(getDir() + "info.html");
			}
		}, true);
	}
})