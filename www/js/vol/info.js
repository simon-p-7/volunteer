needAskLogout = true;
$(function () {
    ajaxGet(volService + "UserInfo", { id: getUser() }, function (data) {
        var d = XML2JSON(data);
        $("#uname").val(d[0]);
        $("#name").val(d[1]);
        $("#asso").val(d[2]);
        $("#team").val(d[3]);
        $("#squad").val(d[4]);
        $("#head").attr("src", skinPath + d[5]);
        $("#hour").val(d[6]);
        $("#star").val(d[7]);
        if (d[8] === "") {
            $("qr").remove();
        } else {
            $("#qr").attr("src", d[8]);
        }
    });

    $("button,nav ul li").click(function (e) {
        var tag = e.target;
        redirect((tag.nodeName.toUpperCase() === "IMG" ? tag.parentNode.id : tag.id) + "-activity.html");
    });
});