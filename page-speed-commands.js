Selenium.prototype.doRunYslow = function(){
	var wm = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
	var browserWindow = wm.getMostRecentWindow("navigator:browser");

	browserWindow.YSLOW.firefox.run(false);
};
