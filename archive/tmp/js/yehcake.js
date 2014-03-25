function getFeed(feed) {
	var result;
	var url = feed.url;
	var input = {};
	input.feed = feed.name;
	$.getJSON(url, input, function (output) {
	    result = output;
	})
	.done(function () {
	    setData(feed.name, result);
	    console.log("success");
	})
  	.fail(function () {
  	    result = null;
  	})
  	.always(function () {
  	    console.log("complete");
  	});	
	
	return result;
}

function getFeedInfo(name) {
	var result = {};
	switch (name) {
		case "calendar" : 
			result.url = "https://script.google.com/macros/s/AKfycbzwmWp2Y9Rq_RKlWELhisIUEw45XrYaK7Z3LpQRXjaNYXqxbev_/exec?callback=?";
			break;
		case "catalog" : 
			result.url = "https://script.google.com/macros/s/AKfycbzwmWp2Y9Rq_RKlWELhisIUEw45XrYaK7Z3LpQRXjaNYXqxbev_/exec?callback=?";
			break;
        case "headers":
            result.url = "https://stellar-display-454.appspot.com/?callback=?";
            break;
		case "postal" : 
			result.url = "https://script.google.com/macros/s/AKfycbzwmWp2Y9Rq_RKlWELhisIUEw45XrYaK7Z3LpQRXjaNYXqxbev_/exec?callback=?";
			break;
		default :
			result = null;
	}
	result.name = name;
	return result;
}

function getData(key) {
    var result = $("body").data(key);	
    if (result == undefined) {
        return null;
    } else {
        return result;
    }
}

function setData(key, value) {
	$( "body" ).data( key, value );
}

function getCookiePair(key, value, isFirst) {
	var prefix = "; ";
	if (isFirst) {
		prefix = "";
	}
	return prefix + key + "=" + value;
}

function deleteCookie(key) {
	var past = new Date();
	past.setTime(past.getTime() - 1000);
	var cookie = getCookiePair(key, "", true);
	var expiration = getCookiePair("expires", past.toGMTString(), false);
	document.cookie = cookie + expiration;	
}

function setCookie(key, value, exp) {
	if (value == null) {
		deleteCookie(key);
	} else {
		var cookie = getCookiePair(key, encodeURI(value), true);
		var domain = getCookiePair("domain", ".yehcake.com", false);
		var path = getCookiePair("path", "/", false);
		var expiration = "";
		if (exp != null) {
			expiration = getCookiePair("expires", exp.toGMTString(), false);
		}
		document.cookie = cookie + expiration + path; 
	}
}

function getCookie(key) {
	// cookies are separated by semicolons
	var cookies = document.cookie.split("; ");
	for (var i=0; i < cookies.length; i++) {
		// a name/value pair (a crumb) is separated by an equal sign
		var crumb = cookies[i].split("=");
		if (key == crumb[0]) {
			return decodeURI(crumb[1]);
		}
	}
	// a cookie with the requested name does not exist
	return null;
}

function getStandardCookieExpiration() {
	var now = new Date();
	var result = new Date(now.setMonth(now.getMonth() + 1));
	return result;
}

function isNewSession() {
	var key = "sessionId";
	var sessionId = getCookie(key);	
	if (sessionId == null) {
		return true;
	} else {
		return false;
	}
}

function getSessionId() {
	var key = "sessionId";
	var sessionId = getCookie(key);	
	if (sessionId == null) {
		var now = new Date();
		var suffix = String(Math.random()).split(".");
		sessionId = now.getTime() + "." + suffix[1];
	}
	return sessionId;
}

function setSessionId(id) {
	var key = "sessionId";
	setCookie(key, id, getStandardCookieExpiration());
}

function getLanguage() {
	var key = "language";
	var lang = getCookie(key);	
	if (lang == null) {
		lang = "en-us";
	}
	return lang;	
}

function setLanguage(lang) {
	var key = "language";
	setCookie(key, lang, getStandardCookieExpiration());
	//set UI accordingly here
}

function init() {
	//var postalCodes = getFeed(getFeedInfo("postal"));
	//var headers = getFeed(getFeedInfo("headers"));
	//var catalog = getFeed(getFeedInfo("catalog"));
    var calendar = getFeed(getFeedInfo("calendar"));

	var cart = null;
	if (isNewSession()) {
		setSessionId(getSessionId());
	} else {
	//	cart = getCart(getSessionId());
	}
	//setData("cart", cart);

	// var sessionInfo = getSessionInfo();
	// setData("session", sessionInfo);

	setLanguage(getLanguage());
}