window.win = window, win.doc = win.document, win.sess = win.sessionStorage;
win.serviceHost = "http://10.0.2.2:12411/", win.volService = serviceHost + "VolunteerWebService.asmx/";
win.fileHost = "http://10.0.2.2:15041/", win.skinPath = fileHost + "Skin/Images/";

doc.addEventListener("deviceready", function(e) {
	navigator.notification && (win.nav = navigator, win.alert = nav.notification.alert, win.confirm = nav.notification.confirm);
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