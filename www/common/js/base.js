window.win = window, win.doc = win.document, win.sess = win.sessionStorage;
win.host = "http://10.0.2.2:12411/", win.volHost = host + "VolunteerWebService.asmx/";

doc.addEventListener("deviceready", function(e) {
	navigator.notification && (win.nav = navigator, win.alert = nav.notification.alert, win.confirm = nav.notification.confirm);
}, false);

win.redirect = function(h) {
	win.location.href = h;
}

win.XML2JSON = function(data) {
	return JSON.parse($(data).find("string").text());
}