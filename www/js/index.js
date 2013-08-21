$(function() {
	$("#txt_un").focus().keydown(function(e) {
        e.which === 13 && $("#txt_pw").focus();
    });
	$("#txt_pw").keydown(function(e) {
       e.which === 13 && login(e);
    });
	$("#btn_li").click(login);
	
	function login(e) {
		sess.setItem("user_id", "2");
		redirect("sub.html");
	}
})