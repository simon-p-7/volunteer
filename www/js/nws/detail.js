needAskLogout = false;
$(function() {
    ajaxGet(nwsService + "Detail", { id: getId(getItem("news_id")) }, function(data) {
        var d = XML2JSON(data);
        $("#title").html(d[0]);
        $("#source").val(d[1]);
        $("#time").val(d[2]);
        $("section").html(d[3]);

        $("section img[src^='../']").each(function(i) {
            alert(this.src);
            alert(fileHost + this.src.replace("../", ""));
        	this.src = fileHost + this.src.replace("../", "");
        });
    });
})