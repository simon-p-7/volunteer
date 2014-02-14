needAskLogout = false;
$(function() {
	$("#tem").prop("checked", true);
	
	var savedUn = getlocalItem("user_name");
	savedUn && $("#txt_un").val(savedUn);
	
	$("body").click(function(e) {
        $("article").css("margin-top", e.target.type === "text" || e.target.type === "password" ? "-16em" : "0");
    });
	
	$("#txt_un,#txt_pw").keydown(function(e) {
       e.which === 13 && login(e);
    });
	$("#btn_li").click(login);
	
	$("#vol,#tem").change(function(e) {
        $(e.target).next().removeClass("unchecked").addClass("checked");
		$("#" + (e.target.id == "vol" ? "tem" : "vol")).next().removeClass("checked").addClass("unchecked");
    	$("#txt_pw,#txt_un").val("");
	});
	
	function login(e) {
		$("article").css("margin-top", "0");
		var unv = $("#txt_un").val(), pwv = $("#txt_pw").val();
		if (unv === "" || pwv === "") sorry("请先输入帐号和密码！");
		else {
			var isTem = $("#tem").prop("checked");
			ajaxGet((isTem ? temService : volService) + "Login", { un: unv, pw: pwv}, function(data) {
				var d = XML2JSON(data);
				if (d === null) sorry("登录失败！");
				else {
					setItem("user_type", isTem ? "tem" : "vol");
					setItem("user_id", d);
					setlocalItem("user_name", unv);
					redirect(getDir() + "info.html");
				}
				$("#txt_pw").val("");
			}, true);
		}
	}
})