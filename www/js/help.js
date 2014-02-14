needAskExit = false;
$(function() {
	$("section ul").keydown(function(e) {
		if (e.which === 13) {
			alert(e.target.id);
			//switch (e.target.id) {
			//}
			$("#txt_name").focus();
		}
    });

	$("#commit").click(function(e) {
		var vtitle = $("#txt_title").val();
		var vname = $("#txt_name").val();
		var vage = $("#txt_age").val();
		var vphone = $("#txt_phone").val();
		var vaddress = $("#txt_address").val();
		var vcontent = $("#txt_content").val();

		if ()

		ajaxGet(hlpService + "Help", { title: vtitle, name: vname, age: vage, phone: vphone, address: vaddress, content: vcontent }, function(data) {
			var d = XML2JSON(data);
		});
	});
});