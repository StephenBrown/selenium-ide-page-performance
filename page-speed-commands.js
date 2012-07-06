Selenium.prototype.doRunYslow = function(beaconId){
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
	var browserWindow = wm.getMostRecentWindow("navigator:browser");

	if (beaconId) {
		var beaconUrl = browserWindow.YSLOW.util.Preference.getPref('beaconUrl');
		var beaconUrlWithPageId = beaconUrl;
		beaconUrlWithPageId = beaconUrl + beaconId + '/';
		browserWindow.YSLOW.util.Preference.setPref('beaconUrl', beaconUrlWithPageId);
	}

	browserWindow.YSLOW.firefox.run(false);

	if (beaconId) {
		browserWindow.YSLOW.util.event.addListener('onUnload', function() {
			browserWindow.YSLOW.util.Preference.setPref('beaconUrl', beaconUrl);
		});
	}
};
