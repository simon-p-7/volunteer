window.win = window, win.doc = win.document, win.sess = win.sessionStorage, win.stag = win.localStorage;
win.host = "http://192.168.1.99:", win.serviceHost = host + "2544/", win.fileHost = host + "15041/";
win.volService = serviceHost + "VolunteerWebService.asmx/", win.temService = serviceHost + "TeamWebService.asmx/", win.nwsService = serviceHost + "NewsWebService.asmx/", win.hlpService = serviceHost + "HelpWebService.asmx/";
win.skinPath = fileHost + "Skin/Images/", win.filePath = fileHost + "Upfiles/", win.teamPath = fileHost + "Module/FilesUp/UserIcon/";
win.needAskExit = undefined, win.needAskLogout = undefined;
doc.addEventListener("deviceready", function(e) {
	navigator.notification && (win.nav = navigator, win.alert = nav.notification.alert, win.confirm = nav.notification.confirm, win.vibrate = nav.notification.vibrate);
	nav.connection.type == Connection.NONE && sorry("网络连接不可用，请检查！", nav.app.exitApp);
	needAskLogout === undefined || doc.addEventListener("backbutton", needAskLogout ? logout : goBack, false);
	needAskExit === undefined || doc.addEventListener("backbutton", needAskExit ? appExit : nav.app.exitApp, false);
}, false);

win.redirect = function(h) {
	win.location.href = h;
}

win.XML2JSON = function(data) {
	return JSON.parse($(data).find("string").text());
}

win.goBack = function() {
	win.history.back();
}

win.getUser = function() {
	return sess.getItem("user_id");
}

win.getDir = function() {
	return sess.getItem("user_type") + "/";
}

win.setItem = function(k, v) {
	sess.setItem(k, v);
}

win.getItem = function(k) {
	return sess.getItem(k);
}

win.setlocalItem = function(k, v) {
	stag.setItem(k, v);
}

win.getlocalItem = function(k) {
	stag.getItem(k);
}

win.good = function(msg) {
	alert(msg, null, "恭喜您", "确 定");
}

win.sorry = function(msg, func) {
	alert(msg, func, "对不起", "确 定");
}

win.appExit = function() {
	confirm("您真的要退出程序吗？", function(btn) { btn === 1 && nav.app.exitApp() }, "提 示", "是,否");
}

win.logout = function() {
	confirm("您真的要注销用户吗？", function(btn) { btn === 1 && (sess.clear(), goBack()); }, "提 示", "是,否");
}

win.getId = function(id, g) {
	(g === undefined || g === null) && (g = 2);
	
	return id.substring(g, id.length);
}

win.ajaxGet = function(url, data, func, sync) {
	$.ajax({
		"type": "GET",
		"url": url,
		"data": data,
		"dataType": "xml",
		"async": !sync,
		"timeout": 21000,
		"global": false,
		"success": func,
		"error": function(xhr, type, err) {
			sorry("网络不给力！\n 或\n服务器出错！");
		}
	});
}