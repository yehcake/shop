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
		case "div": isEmptyElement = false; break;
		case "footer": isEmptyElement = false; break;
		case "header": isEmptyElement = false; break;
		case "img": isEmptyElement = true; break;
		case "input": isEmptyElement = true; break;
		case "label": isEmptyElement = false; break;
		case "nav": isEmptyElement = false; break;
		case "script": isEmptyElement = false; break;
		case "section": isEmptyElement = false; break;
		case "span": isEmptyElement = false; break;
		default: return null;
	}
	return getElement(tag, attributes, innerHtml, isEmptyElement);
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

function viewSource() {
	return "<html>" + $("html").html() + "</html>";
}
