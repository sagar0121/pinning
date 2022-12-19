Java.perform(function ()
{
    
var MainActivity = Java.use('abudhabi.tamm.live');
	MainActivity.root.implementation = function (detectmethods) {
        console.log('Done: bypassed');
		return false;
    };