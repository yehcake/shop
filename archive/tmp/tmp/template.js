// JQUERY LIBRARY MUST BE LOADED BEFORE THIS LIBRARY

function getTestimonials() {
    var testimonials = "We loved all the cakes so much that we ordered them two weeks in a row!  My coworkers kept talking about them after the first time we had one.  The cakes are delicious and moist and the frosting is amazing.  It was just the right sweetness to complement the cake and definitely the best cake I’ve had in Taiwan. ~Leo L. |Hands down this is the BEST cake I've had in Taiwan! ~Simone S. | WOW - yum.  You totally did it.  The frosting was infused with the flavor of strawberries.  It was not overpowering, nor overly sweet.  So, good. ~Ivonne V. |Your carrot cake was even better than our wedding cake! ~Randy C. |The cake was a huge hit! Everyone loved it and wanted seconds. ~Nathan P. |  The party was a huge success, thanks to you!  The cakes looked great, tasted even better, and the top-notch service was icing on the cake, so to speak! ~Cindy T.";
   	return testimonials;
}
        
function getRandomIndex(num) {
    return Math.floor(Math.random() * (num));
}

function getRandomText(str) {
    var text = str.split(/\s*\|\s*/);
    if (text.length > 0) {
        return text[getRandomIndex(text.length)];
    } else {
        return null;
    }
}
        
function getShortTestimonial(str, len) {        
    var quote = str;
    var author = "";
        
    if (len > -1) {
        var i = str.lastIndexOf("~");
        if (i > -1) {
        	quote = trim(str.substring(0, i));
        	author = trim(str.substring(i+1));
        }
        var quoteMaxLen = len - author.length - 7;
        if (quote.length > quoteMaxLen) {
        	quote = trim(quote.substring(0, quoteMaxLen)) + "...";
        }
        return '"' + quote + '" ~' + author;
    } else {
        return trim(str);
    }
}
        
function trim(str) {
    return str.replace(/^\s+|\s+$/g,"");
}

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
		document.cookie += ("; domain=.yehcake.com");
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

function getReferer() {
    return location.href;
}
    		
function getRemoteAddr() {
    return getCookie("remoteAddr");
}
    		
function getUserAgent() {
    return navigator.userAgent;
}
    	
function resetFeedbackForm() {
    $( "#email" ).val("");
    $( "#feedback" ).val("");
    $( "#recaptchaLabel" ).css("color","black");
    Recaptcha.destroy();    
    $( "#feedbackFormDialog" ).dialog( "close" );  
}

// GOOGLE SPECIFIC FUNCTIONS

function showRecaptcha(element) {
    Recaptcha.create("6LdZh9kSAAAAAPC7plaLYCg9Japa0nVapgLBoMMw", element, {
    	theme: "clean",
        callback: Recaptcha.focus_response_field});
}

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'ja,ko,zh-CN,zh-TW', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false, multilanguagePage: true, gaTrack: true, gaId: 'UA-35314774-1'}, 'google_translate_element');
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35314774-1']);
_gaq.push(['_setDomainName', 'yehcake.com']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// JQUERY

$(document).ready(function(){
     		
	var ipService = "http://app.yehcake.com/remoteip";
     		
	if (getCookie("remoteAddr") == null) {
    	$.get(ipService, function(data){
			setSessionCookie("remoteAddr",data);
		}, "jsonp");
	} 

});
