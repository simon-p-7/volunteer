$(function() {
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
		setItem("user_type", $("#tem").prop("checked") ? "tem" : "vol");
		setItem("user_id", "1");
		redirect(getDir() + "info.html");
	}
})