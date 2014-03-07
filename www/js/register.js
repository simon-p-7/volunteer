needAskLogout = false;
$(function () {
    var u = $("#union");
    ajaxGet(volService + "FindDept", { type: 0, union: null, center: null }, function (data) {
        var d = XML2JSON(data);
        u.html("");
        for (var i = 0, obj; obj = d[i++]; ) {
            u.append("<option value='" + obj + "'>" + obj + "</option>");
        }
    });
    u.change();

    $("#commit").click(function (e) {
        var namev = $("#name").val();
        var pwdv = $("#pwd").val();
        var pwdagv = $("#pwdag").val();
        var idv = $("#id").val();
        var phonev = $("#phone").val();
        var genderv = $("#gender").val();
        var unionv = $("#union").val();
        var centerv = $("#center").val();
        var teamv = "123";

        if (namev === "" || pwdv === "" || pwdagv === "" || idv === "" || phonev === "") sorry("请先完善求助信息！");
        else if (pwdv.length < 4) sorry("密码不能小于4位！"), $("#pwd").focus();
        else if (!isIdCardNo(idv)) sorry(""), $("#id").focus();
        else if (!/^\d+$/i.test(phonev)) sorry("电话只能输入数字！"), $("#phone").focus();
        else if (pwdv !== pwdagv) sorry("密码与确认密码不一致！"), $("#pwdag").val("").focus();
        else ajaxGet(volService + "Register", { name: namev, pwd: pwdv, id: idv, phone: phonev, gender: genderv, union: unionv, center: centerv, team: teamv }, function (data) {
            var d = XML2JSON(data);
            d === 0 ? sorry("注册志愿者失败！") : (good("注册志愿者成功！"));
        });
    });

    $("#union").change(function (e) {
        var c = $("#center");

        ajaxGet(volService + "FindDept", { type: 1, union: $("#union").val(), center: null }, function (data) {
            var d = XML2JSON(data);
            c.html("");
            for (var i = 0, obj; obj = d[i++]; ) {
                c.append("<option value='" + obj + "'>" + obj + "</option>");
            }
        });
        c.change();
    });
    $("#center").change(function (e) {
        ajaxGet(volService + "FindDept", { type: 2, union: $("#union").val(), center: $("#center").val() }, function (data) {
            var d = XML2JSON(data);
            // TODO
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