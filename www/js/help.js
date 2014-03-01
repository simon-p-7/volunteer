needAskLogout = false;
$(function () {
    $("#commit").click(function (e) {
        var titlev = $("#txt_title").val();
        var namev = $("#txt_name").val();
        var agev = $("#txt_age").val();
        var phonev = $("#txt_phone").val();
        var addressv = $("#txt_address").val();
        var contentv = $("#txt_content").val();
        
        if (titlev === "" || namev === "" || agev === "" || phonev === "" || addressv === "" || contentv === "") sorry("请先完善求助信息！");
        else if (!/^\d+$/i.test(agev)) sorry("年龄只能输入数字！"), $("#txt_age").focus();
        else if (!/^\d+$/i.test(phonev)) sorry("电话只能输入数字！"), $("#txt_phone").focus();
        else ajaxGet(hlpService + "Help", { title: titlev, name: namev, age: agev, phone: phonev, address: addressv, content: contentv }, function(data) {
        	var d = XML2JSON(data);
        	d === 0 ? sorry("提交信息失败！") : (good("提交信息成功！"), goBack());
        });
 });

 $("nav ul").click(function(e) {
     var tag = e.target;
     if (tag.nodeName.toUpperCase() !== "LI") {
         while (tag.parentNode.nodeName.toUpperCase() !== "LI") tag = tag.parentNode;
         tag = tag.parentNode;
     }
     switch (tag.id) {
         case "home": redirect("index.html"); break;
         case "news": redirect("nws/list.html"); break;
         case "activity": redirect("vol/launch-activity.html"); break;
         case "help": redirect("help.html"); break;
         case "login": redirect("login.html"); break;
     }
 });
})