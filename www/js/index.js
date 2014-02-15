needAskExit = true;
$(function() {
    var uls = $("article ul").html("");
    ajaxGet(nwsService + "NewsTop", { top: 4 }, function(data) {
        var d = XML2JSON(data);
        for (var i = 0, arr; arr = d[i++];) {
            uls.eq(0).append("<li id='n_" + arr[0] + "'>" + arr[1] + "<br><span>" + arr[2] + "</span></li>");
        }
    });
    ajaxGet(nwsService + "LaunchTop", { top: 4 }, function(data) {
        var d = XML2JSON(data);
        for (var i = 0, arr; arr = d[i++];) {
            uls.eq(1).append("<li id='a_" + arr[0] + "'>" + arr[1] + "<br><span>" + arr[2] + "</span></li>");
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
            setItem("activity_had", false);
            redirect("../vol/activity.html");
        } else {
            setItem("news_id", tag.id);
            redirect("detail.html");
        }
    });
})