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
        else ajaxGet(hlpService + "Help", { title: titlev, name: namev, age: agev, phone: phonev, address: addressv, content: contentv }, function (data) {
            var d = XML2JSON(data);
            d === 0 ? sorry("提交信息失败！") : (good("提交信息成功！"), goBack());
        });
    });

    function isIdCardNo(num) {
        if (num.length == 18) {
            var coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            var result = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
            var sum = 0;
            for (var i = 0; i < 17; i++) {
                var a = parseInt(num[i]);
                isNaN(a) || (sum += coefficient[i] * a);
            }
            return result[sum % 11] === num[17].toUpperCase();
        } else {
            return false;
        }
    }
})