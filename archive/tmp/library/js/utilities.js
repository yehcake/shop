function loadScript(url) {
	var attr = {};
	attr.src = url;
	attr.type = "text/javascript";
	$("head").append(getHtml("script", attr, null));
}

function showRecaptcha(element) {
    Recaptcha.create("6LdZh9kSAAAAAPC7plaLYCg9Japa0nVapgLBoMMw", element, {
    	theme: "clean",
        callback: Recaptcha.focus_response_field});
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
		//document.cookie += ("; domain=.yehcake.com");
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

function getReferer() {
    return location.href;
}

function setRemoteAddr() {
    var ipService = "http://app.yehcake.com/remoteip";
     		
	if (getCookie("remoteAddr") == null) {
    	$.get(ipService, function(data){
			setSessionCookie("remoteAddr",data);
		}, "jsonp");
	} 
}
		
function getRemoteAddr() {
    return getCookie("remoteAddr");
}
    		
function getUserAgent() {
    return navigator.userAgent;
}
    
function getQueryString(queries) {
    var result = "";
    for (var i = 0; i < queries.length; i++) {
        if (i > 0) {
            result += "&";
        }
        result += queries[i].key + "=" + queries[i].value;
    }
    return encodeURI(result);
}

function getUrl(base, path, queries) {
    var result = base.toLowerCase();
    if (!(isEmptyString(path))) {
        result += path.toLowerCase();
    }
    if (!(isEmptyString(queries))) {
        result += "?" + getQueryString(queries);
    }
    return result;
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

function isEmptyString(str) {
	var type = jQuery.type(str);
	if ((type === "undefined") || (type === "null") || (str == "")) {
		return true;
	} else {
		return false;
	}
}

function isString(obj) {
	if (jQuery.type(obj) === "string") {
		return true;
	} else {
		return false;
	}
}

function getSearchQueryValue(key) {
	var query;
	var queryString = location.search;	
	if (!(isEmptyString(queryString))) {
		queries = queryString.substring(1, queryString.length).split("&");	
		for (var i = 0; i < queries.length; i++) {
			query = queries[i].split("=");
			if (key.toLowerCase() == query[0].toLowerCase()) {
				return decodeURIComponent(query[1]);
			}
		}
	}
	return null;
}

function getLocalePair(val) {
    var result = {};
    result.key = "hl";
    result.value = val;
    return result;
}

function getInverseLocaleAsQueryString() {
    if (isEmptyString(getLocaleAsQueryString())) {
        return [getLocalePair("zh-TW")];
    } else {
        return null;
    }
}

function getLocaleAsQueryString() {
    var result = [];
    var locale = getLocale();
    result.push(getLocalePair(locale));
    if (locale == "en") {
        return null;
    } else {
        return result;
    }
}

function getLocale() {
	var val = getSearchQueryValue("hl");
	if (isEmptyString(val)) {
		return "en";
	} else {
		return val;
	}
}

function getAttributes(dictionary) {
	var result = "";
	for (key in dictionary) {
		result += ' ' + key.toLowerCase() + '="' + dictionary[key] + '"';
	}
	return result;
}

function getOpeningTag(tag, attributes, isEmptyElement) {
	var result = "<";
	result += tag.toLowerCase();
	if (attributes != null) {
		result += getAttributes(attributes);
	}
	if (isEmptyElement) {
		result += " /"
	}
	result += ">"
	return result;
}

function getClosingTag(tag, isEmptyElement) {
	var result = "";
	if (!(isEmptyElement)) {
		result = "</" + tag + ">";
	}
	return result.toLowerCase();
}

function getElement(tag, attributes, innerHtml, isEmptyElement) {
	var result = getOpeningTag(tag, attributes, isEmptyElement);
	if ((isString(innerHtml)) && (!(isEmptyString(innerHtml)))) {
		result += innerHtml;	
	} 
	result += getClosingTag(tag, isEmptyElement);
	return result;
}

function getGlobalAttributes(classStr, id, style, title) {
	var result = {};
	
	if (!(isEmptyString(classStr))) {
		result.class = classStr;
	}
	if (!(isEmptyString(id))) {
		result.id = id;
	}
	if (!(isEmptyString(style))) {
		result.style = style;
	}
	if (!(isEmptyString(title))) {
		result.title = title;
	}
	return result;
}

function getImageAttributes(src, alt, height, width, map, classStr, id, style, title) {
	var result = getGlobalAttributes(classStr, id, style, title);
	if (!(isEmptyString(src))) {
		result.src = src;
	}
	if (!(isEmptyString(alt))) {
		result.alt = "[ " + alt + " ]";
	}
	if (!(isEmptyString(height))) {
		result.height = height;
	}
	if (!(isEmptyString(width))) {
		result.width = width;
	}
	if (!(isEmptyString(map))) {
		result.usemap = map;
	}
	return result;
}

function getSimpleImageAttributes(src, classStr, id) {
	return getImageAttributes(src, null, null, null, null, classStr, id, null, null);
}

function getLinkAttributes(href, rel, target, classStr, id, style, title) {
	var result = getGlobalAttributes(classStr, id, style, title);
	if (!(isEmptyString(href))) {
		result.href = href;
	}
	if (!(isEmptyString(rel))) {
		result.rel = rel;
	}
	if (!(isEmptyString(target))) {
		result.target = target;
	}
	return result;
}

function getSimpleLinkAttributes(href, classStr, id) {
	return getLinkAttributes(href, null, null, classStr, id, null, null);
}

function getHtml(tag, attributes, innerHtml) {
	var isEmptyElement;
	switch(tag) {
		case "a": isEmptyElement = false; break;
		case "area": isEmptyElement = true; break;
        case "button": isEmptyElement = false; break;
		case "div": isEmptyElement = false; break;
		case "footer": isEmptyElement = false; break;
		case "form": isEmptyElement = false; break;
		case "header": isEmptyElement = false; break;
		case "img": isEmptyElement = true; break;
		case "input": isEmptyElement = true; break;
		case "label": isEmptyElement = false; break;
		case "map": isEmptyElement = false; break;
		case "nav": isEmptyElement = false; break;
		case "script": isEmptyElement = false; break;
		case "section": isEmptyElement = false; break;
		case "span": isEmptyElement = false; break;
		case "textarea": isEmptyElement = false; break;
		default: return null;
	}
	return getElement(tag, attributes, innerHtml, isEmptyElement);
}

function getA(classStr, id, title, href, innerHtml) {
    var attr = getSimpleLinkAttributes(href, classStr, id);
    return getHtml("a", attr, innerHtml);
}

function getArea(id, title, coords, shape) {
    var attr = getGlobalAttributes(null, id, null, title);
    attr.alt = title;
    attr.coords = coords;
    attr.shape = shape;
    return getHtml("area", attr, null);
}

function getDiv(classStr, id, title, innerHtml) {
    var attr = getGlobalAttributes(classStr, id, null, title);
	return getHtml("div", attr, innerHtml);
}

function getMap(id, innerHtml) {
    var attr = getGlobalAttributes(null, id, null, null);
    attr.name = id;
    return getHtml("map", attr, innerHtml);
}

function getClickableImage(linkAttr, imgAttr) {
	var innerHtml = getHtml("img", imgAttr, null);
	var result = getHtml("a", linkAttr, innerHtml);
	return result;
}

function getRadioButton(id, label, isChecked) {
	var inputAttr = getGlobalAttributes(null, id, null, null);
	inputAttr.type = "radio";
	inputAttr.name = inputAttr.type;
	if (isChecked) {
		inputAttr.checked = "checked";
	}
	var labelAttr = {};
	labelAttr.for = id;
	var inputTag = getHtml("input", inputAttr, null);
	var labelTag = getHtml("label", labelAttr, label);
	return inputTag + labelTag;
}

function getBanner(link, image, title) {
    var result = {};
    result.link = link;
    result.image = image;
    result.title = title;
    return result;
}

function getLink(url, txt) {
    var result = {};
    result.url = url;
    result.text = txt;
    return result;
}

function getFormField(kind, fieldLabel, name, size, value) {
    var label = "";
    var labelAttr = getGlobalAttributes("ui-form-field-label", null, null, null);
    var attr = getGlobalAttributes(null, name, null, null);
    attr.name = name;
    attr.type = "text";
    attr.size = size;
    if (!(isEmptyString(value))) {
        attr.value = value;
    }
    switch(kind) {
		case 0: attr.class = "ui-form-field-hidden"; break;
		case 1: label = getHtml("div", labelAttr, fieldLabel); attr.class = "ui-form-field-optional"; break;
		case 2: label = getHtml("div", labelAttr, fieldLabel); attr.class = "ui-form-field-required"; break;
    }
    return label + getHtml("input", attr, null);
}

function viewSource() {
	return "<html>" + $("html").html() + "</html>";
}
