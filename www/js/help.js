needAskLogout = false;
$(function() {
	alert("here");
	// $("section ul").keydown(function(e) {
	// 	if (e.which === 13) {
	// 		alert(e.target.id);
	// 		switch (e.target.id) {
	// 			case "txt_title":
	// 				$("#txt_name").focus();
	// 				break;
	// 			case "txt_name":
	// 				$("#txt_age").focus();
	// 				break;
	// 			case "txt_age":
	// 				$("#txt_phone").focus();
	// 				break;
	// 			case "txt_phone":
	// 				$("#txt_address").focus();
	// 				break;
	// 			case "txt_address":
	// 				$("#txt_content").focus();
	// 				break;
	// 			case "txt_content":
	// 				$("#commit").focus();
	// 				break;
	// 		}
	// 	}
 //    });

	// $("#commit").click(function(e) {
	// 	var titlev = $("#txt_title").val();
	// 	var namev = $("#txt_name").val();
	// 	var agev = $("#txt_age").val();
	// 	var phonev = $("#txt_phone").val();
	// 	var addressv = $("#txt_address").val();
	// 	var contentv = $("#txt_content").val();

	// 	if (titlev === "" || namev === "" || agev === "" || phonev === "" || addressv === "" || contentv === "")
	// 		sorry("请您完善求助信息后再提交！");
	// 	else
	// 		ajaxGet(hlpService + "Help", { title: titlev, name: namev, age: agev, phone: phonev, address: addressv, content: contentv }, function(data) {
	// 			var d = XML2JSON(data);
	// 			d === 0 ? sorry("提交失败！") ： good("提交成功！");
	// 		});
	// });
})