needAskExit = true;
$(function() {
    var uls = $("section article ul").html("");
    ajaxGet(nwsService + "NewsTop", null, function(data) {
        var d = XML2JSON(data);
        for (var i = 0, arr; arr = d[i++];) {
            uls.eq(0).append("<li id='n_" + arr[0] + "'><nobr>" + arr[1] + "</nobr><span>[" + arr[2] + "]</span></li>");
        }
    });
    ajaxGet(nwsService + "LaunchTop", null, function(data) {
        var d = XML2JSON(data);
        for (var i = 0, arr; arr = d[i++];) {
            uls.eq(1).append("<li id='a_" + arr[0] + "'><nobr>" + arr[1] + "</nobr><nobr>ËþÉ½½ÖµÀ</nobr><span>[" + arr[2] + "]</span></li>");
        }
    });

    uls.click(function(e) {
        var tag = e.target;
        if (tag.nodeName.toUpperCase() !== "LI") {
            while (tag.parentNode.nodeName.toUpperCase() !== "LI") tag = tag.parentNode;
            tag = tag.parentNode;
        }
        if (tag.id[0] === 'a') {
            setItem("activity_id", tag.id);
            setItem("activity_had", true);
            redirect("vol/activity.html");
        } else {
            setItem("news_id", tag.id);
            redirect("nws/detail.html");
        }
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