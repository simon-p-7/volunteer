window.win = window, win.doc = win.document, win.sess = win.sessionStorage;
doc.addEventListener("deviceready", function(e) {
	navigator.notification && (win.nav = navigator, win.alert = nav.notification.alert, win.confirm = nav.notification.confirm);
}, false);

win.redirect = function(h) {
	win.location.href = h;
}