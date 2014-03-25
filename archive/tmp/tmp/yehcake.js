// JQUERY LIBRARY MUST BE LOADED BEFORE THIS LIBRARY

function setLocation(url) {
        	
	if (typeof(history.pushState)==="function") {
    	var productID = "foobar";
        var stateObj = { product: productID };
		history.pushState(stateObj, productID, url);
	} 
}

function setSessionCookie(name, value) {
	if ((name.length > 0) && (value.length > 0) && (getCookie(name) == null)) {
		document.cookie = name + "=" + escape(value);
		document.cookie += ("; domain=yehcake.azurewebsites.net");
		document.cookie += ("; path=/"); 
	}
}

function getCookie(sName) {
	// cookies are separated by semicolons
	var aCookie = document.cookie.split("; ");
	for (var i=0; i < aCookie.length; i++) {
		// a name/value pair (a crumb) is separated by an equal sign
		var aCrumb = aCookie[i].split("=");
		if (sName == aCrumb[0]) {
			return unescape(aCrumb[1]);
		}
	}
	// a cookie with the requested name does not exist
	return null;
}	

function getCart() {

	var result = [];
	var patt = /^sc/
	var aCookie = document.cookie.split("; ");
	for (var i=0; i < aCookie.length; i++) {
		// a name/value pair (a crumb) is separated by an equal sign
		var aCrumb = aCookie[i].split("=");
		if (patt.test(aCrumb[0])) {
			result.push([aCrumb[0].substring(2),unescape(aCrumb[1])]);
		}
	}	
	
	return result;
}

// GOOGLE SPECIFIC FUNCTIONS

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'ja,ko,zh-CN,zh-TW', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false, multilanguagePage: true, gaTrack: true, gaId: 'UA-35314774-1'}, 'google_translate_element');
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35314774-1']);
_gaq.push(['_setDomainName', 'azurewebsites.net']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// JQUERY

$(document).ready(function(){
     		
	var ipService = "http://www.yehcake.com/service/remoteip";
     		
	if (getCookie("remoteAddr") == null) {
    	$.get(ipService, function(data){
			setSessionCookie("remoteAddr",data);
		}, "jsonp");
	} 

});
