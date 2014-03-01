needAskLogout = false;
$(function () {
    getUser() === -1 ? $("article").css("padding-bottom", "11em") : $("nav").remove();

    var ul = $("article ul").html("");
    ajaxGet(volService + "Launch", null, function (data) {
        var d = XML2JSON(data);
        for (var i = 0, arr; arr = d[i++]; )
            ul.append("<li id='a_" + arr[0] + "'><span>" + arr[1] + "<br><span>" + arr[2] + "</span><span>&nbsp;</span></span></li>");
    });

    ul.click(function (e) {
        var tag = e.target;
        if (tag.nodeName.toUpperCase() !== "LI") {
            while (tag.parentNode.nodeName.toUpperCase() !== "LI") tag = tag.parentNode;
            tag = tag.parentNode;
        }
        setItem("activity_id", tag.id);
        setItem("activity_had", false);
        redirect("activity.html");
    });

    $("nav ul").click(function (e) {
        var tag = e.target;
        if (tag.nodeName.toUpperCase() !== "LI") {
            while (tag.parentNode.nodeName.toUpperCase() !== "LI") tag = tag.parentNode;
            tag = tag.parentNode;
        }
        switch (tag.id) {
            case "home": redirect("../index.html"); break;
            case "news": redirect("list.html"); break;
            case "activity": redirect("../vol/launch-activity.html"); break;
            case "help": redirect("../help.html"); break;
            case "login": redirect("../login.html"); break;
        }
    });
})