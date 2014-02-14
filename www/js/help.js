needAskLogout = false;
$(function() {
	$("#commit").click(function(e) {
		var titlev = $("#txt_title").val();
		var namev = $("#txt_name").val();
		var agev = $("#txt_age").val();
		var phonev = $("#txt_phone").val();
		var addressv = $("#txt_address").val();
		var contentv = $("#txt_content").val();

		alert("here");

		(titlev === "" || namev === "" || agev === "" || phonev === "" || addressv === "" || contentv === "") ?
		sorry("请您完善求助信息后再提交！") :
		ajaxGet(hlpService + "Help", { title: titlev, name: namev, age: agev, phone: phonev, address: addressv, content: contentv }, function(data) {
			var d = XML2JSON(data);
			d === 0 ? sorry("提交失败！") ： good("提交成功！");
		});
	});
})