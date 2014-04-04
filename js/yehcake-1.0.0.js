
// ******************************************************

function changePage(url) 
{
    $(":mobile-pagecontainer").pagecontainer("change", url);
}

function getAbsolutePath(isSecure) {
    var result = "https://" + getPref("secureHost") + getPref("docRoot");
    if (isEmpty(isSecure)) {
        result = "http://" + getPref("host") + getPref("docRoot");
    } 
    return result;
}

function getBiDesc(dict, key) {
    return getBilingualText(dict, key, "description");    
}

function getBiLabel(dict, key) {
    return getBilingualText(dict, key, "label");    

}

function getBilingualText(dict, key, type) {
    var langs = ["zhTw", "enUs"];
    return getText(dict, key, type, langs);
}

function getCond(test, exp1, exp2)
{
    var result = exp2;
    if (test)
    {
        result = exp1;
    }
    return result;
}

function getCookie(sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

function getCookies(regExp) {
    var subset = [];
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
        aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        if (hasValue(regExp)) {
           if (aKeys[nIdx].search(regExp) > -1) {
               subset.push(aKeys[nIdx]);
           }
        }
    }
    if (hasValue(regExp)) {
        return subset;
    } else {
        return aKeys;
    }
}

function hasCookie(sKey) {
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
}

function getDictionary() {
}

function getError()
{
    return null;
}

function getFormData(fields)
{
    var result = {};
    jQuery.each(fields, function(index, field)
    {
        var val = $(field).val();
        if (!isEmpty(val))
        {
            result[field.name] = val;
        }
    });
    return result;
}

function getGeoLocation()
{
    var options = {};
    options.enableHighAccuracy = getPref("geoHighAcc");
    options.maximumAge = getPref("geoLocAge");
    options.timeout = getPref("geoLocTimeout");

    function success(position)
    {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        saveGeoLocation(latitude, longitude);
    }

    function error()
    {}

    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }
}

function getPref(key)
{
    var config = getConfig();
    return getCond(isEmpty(config[key]), getError(), config[key]);
}

function getText(dict, key, type, langs)
{
    var result = "";
    for (var i = 0; i < langs.length; i++) {
        result += getCond(isEmpty(dict[langs[i]][key][type]), getError(), dict[langs[i]][key][type]) + " ";
    }
    return getCond(!isEmpty(result), getError(), result);
}

function initApp() 
{
    if (!hasAppId()) 
    {
        resetApp();
    }
}

function initSession() 
{
    if (!hasSessionId()) 
    {
        resetSession();
    }
}

function isAccountComplete() 
{
    return (getFirstName() && getLastName() && getEmail() && getPhone()); 
}

function isEmpty(val)
{
    return ((val !== undefined) && (val !== null) && (val.trim() !== ""));
}

function isFormComplete(fields)
{
    var result = true;
    jQuery.each(fields, function(index, field)
    {
        if (($(field).hasClass(getPref("requiredFieldClass"))) && (isEmpty($(field).val())))
        {
            result = false;
        }
    });
    return result;
}

function isNumeric(val)
{
    return jQuery.isNumeric(val);
}

function removeCookie(sKey, path, sDomain) {
    var sPath = getPref("docRoot");
    if (!sKey || !hasCookie(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
    return true;
}

function removeCookies(list) {
    var cookies;
    if (hasValue(list)) 
    {
        cookies = list;
    } else 
    {
        cookies = getCookies();
    }
    for (var i = 0; i < cookies.length; i++) {
        removeCookie(cookies[i]);
    }
    return true;
}

function saveForm(fields)
{
    if (isFormComplete(fields))
    {
        uploadForm(getFormData(fields));
    }
    else
    {
        var dict = getDictionary();
        notify(getBiDesc(dict, "requiredFieldsNotice"));
    }
}

function saveGeoLocation(latitude, longitude) {
    
}

function setCookie (sKey, sValue, vEnd, path, sDomain, bSecure) {
    var sPath = getPref("docRoot");
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
}
