document.addEventListener("deviceready", function(e) {
	if (navigator.notification) {
		window.win = window;
		win.nav = navigator;
		win.alert = nav.notification.alert;
		win.confirm = nav.notification.confirm;
	}
}, false);