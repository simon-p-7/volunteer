needAskLogout = false;
$(function() {
    var ul = $("article ul").html("");
    ajaxGet(nwsService + "List", null, function(data) {
        var d = XML2JSON(data);
        for (var i = 0, arr; arr = d[i++];) {
            ul.append("<li id='n_" + arr[0] + "'>" + arr[1] + "<br><span>" + arr[2] + "</span></li>");
        }
    });

    ul.click(function(e) {
        var tag = e.target;
        if (tag.nodeName.toUpperCase() !== "LI") {
            while (tag.parentNode.nodeName.toUpperCase() !== "LI") tag = tag.parentNode;
            tag = tag.parentNode;
        }
        setItem("nh_id", tag.id);
        redirect("detail.html");
    });
})