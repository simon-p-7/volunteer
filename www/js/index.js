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
})