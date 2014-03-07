needAskLogout = false;
$(function () {
    $("#commit").click(function(e) {
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
        var factorArr = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
        var parityBit = new Array("1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2");
        var varArray = new Array();
        var intValue;
        var lngProduct = 0;
        var intCheckDigit;
        var intStrLen = num.length;
        var idNumber = num;
        // initialize
        if ((intStrLen != 15) && (intStrLen != 18)) {
            return false;
        }
        // check and set value
        for (i = 0; i < intStrLen; i++) {
            varArray[i] = idNumber.charAt(i);
            if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
                return false;
            } else if (i < 17) {
                varArray[i] = varArray[i] * factorArr[i];
            }
        }
        if (intStrLen == 18) {
            //check date
            var date8 = idNumber.substring(6, 14);
            if (isDate8(date8) == false) {
                return false;
            }
            // calculate the sum of the products
            for (i = 0; i < 17; i++) {
                lngProduct = lngProduct + varArray[i];
            }
            // calculate the check digit
            intCheckDigit = parityBit[lngProduct % 11];
            // check last digit
            if (varArray[17] != intCheckDigit) {
                return false;
            }
        }
        else {        //length is 15
            //check date
            var date6 = idNumber.substring(6, 12);
            if (isDate6(date6) == false) {
                return false;
            }
        }
        return true;
    }
})