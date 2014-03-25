// AJAX FUNCTIONS BELOW

function ajaxCallback(result, name, type, status) 
{
    switch (name + "_" + type + "_" + status) 
    {
        case "account_upload_always":
            break;
        case "account_upload_done":
            setAccountCreated();
            showSaveSuccess();
            break;
        case "account_upload_fail":
            break;
        case "headers_download_always":
            break;
        case "headers_download_done":
            uploadHeaders(result);
            break;
        case "headers_download_fail":
            break;
        case "headers_upload_always":
            break;
        case "headers_upload_done":
            break;
        case "headers_upload_fail":
            break;
        case "lineItem_upload_always":
            break;
        case "lineItem_upload_done":
            if (hasAccountCreated())
            {
                showSaveSuccess();
            }
            else
            {
                goTo(getLocalUrl("account"));
            }
            break;
        case "lineItem_upload_fail":
            showSaveFailed();
            break;
        case "photo_upload_always":
            break;
        case "photo_upload_done":
            break;
        case "photo_upload_fail":
            showUploadFailed();
            break;
        default:
            break;
    }
}

function ajaxGet(name, url, data, direction) 
{   
    if (name != "headers") 
    {
        showLoader(getTranslation(getDictionary(), "wait", getAllLanguages()));    
    }
    url = url + "?callback=?";
    $.getJSON(url, data, function (result)
    {
    })
    .always(function (result)
    {
        console.log("ajaxGet: " + result);
        hideLoader();
        ajaxCallback(result, name, direction, "always");
    })
    .done(function (result)
    {
        ajaxCallback(result, name, direction, "done");
    })
    .fail(function (result)
    {
        ajaxCallback(result, name, direction, "fail");
    });
}

function ajaxPost(formData) 
{
    var url = "http://yc-dropbox.storage.googleapis.com";
    var jqxhr = $.ajax({
        url: url,
        type: "POST",
        data: formData,
        cache: false,
        contentType: false,
        processData: false
    })
    .always(function (result)
    {
        console.log("ajaxPost: " + result);
        hideLoader();
        ajaxCallback(result, "photo", "upload", "always");
    })
    .done(function (result)
    {
        ajaxCallback(result, "photo", "upload", "done");
    })
    .fail(function (result)
    {
        ajaxCallback(result, "photo", "upload", "fail");
    });
}

// DOWNLOAD FUNCTIONS BELOW

function download(name, url, data) 
{
    ajaxGet(name, url, data, "download"); 
}

function downloadHeaders() 
{
    var url = "https://stellar-display-454.appspot.com/";
    var query = {};
    query.name = "headers";
    download(query.name, url, query);
}

// GET FUNCTIONS BELOW

function getAppCookies() 
{
    var regExp = /^a_/;
    var result = getCookies(regExp);
    return result;
}

function getAppId() 
{
    return getCookie("a_appId");
}

function getContactInfo() 
{
    var result = {};
    result.firstName = getFirstName();
    result.lastName = getLastName();
    result.email = getEmail();
    result.phone = getPhone();
    result.appId = getAppId();
    return result;
}

function getEmail() 
{
    return getCookie("a_email");
}

function getFeedInfo(name) 
{
	var result = {};
	switch (name) 
    {
	    case "calendar":
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

function getFirstName() 
{
    return getCookie("a_firstName");
}

function getLastName() 
{
    return getCookie("a_lastName");
}

function getLineItemDefaults() 
{
    var result = getCookie("lineItemDefaults");
    if (hasValue(result)) 
    {
        return JSON.parse(result);
    } 
    else 
    {
        return null;
    }
}

function getLineItems() 
{
    var result = getCookie("s_lineItems");
    if (hasValue(result)) 
    {
        return JSON.parse(result);
    } 
    else 
    {
        return [];
    }
}

function getLocalUrl(path) 
{
    return "/" + path;
}

function getNewAppId() 
{
  var result = getNewId(null, true);
  return result;
}

function getNewId(prefix, hasSuffix)
{
  var result = "";
  var now = getNow();
  if (hasValue(prefix)) {
    result = String(prefix).toUpperCase();       
  } 
  var timeStamp = now.getTime(); 
  result += timeStamp;
  if (hasSuffix) {
    var suffix = getRandomNum(1000000);
    result += "." + suffix;
  }
  return result;    
}

function getNewLineItemId(sessionId) 
{
  var result = sessionId + "_" + getNewId(null, false);
  return result;
}

function getNewSessionId(appId)
{
  var result = appId + "_" + getNewId(null, false);
  return result;
}

function getPhone() 
{
    return getCookie("a_phone");
}

function getRemoteAddr() 
{
    return getCookie("remoteAddr");
}

function getSessionCookies() 
{
    var regExp = /^s_/;
    var result = getCookies(regExp);
    return result;
}

function getSessionId() 
{
    return getCookie("s_sessionId");
}

function getUserAgent() 
{
    return getCookie("userAgent");
}

// HAS FUNCTIONS BELOW

function hasAccountCreated() 
{
    var status = getCookie("a_accountCreated");
    if (status == null) 
    {
        return false;   
    }
    else 
    {
        return true;
    }
}

function hasAppId() 
{
    var appId = getAppId();
    if (hasValue(appId)) 
    {
        return true;
    } 
    else 
    {
        return false;   
    }
}

function hasSessionId() 
{
    var sessionId = getSessionId();
    if (hasValue(sessionId)) 
    {
        return true;
    } 
    else 
    {
        return false;   
    }
}

// LOG FUNCTIONS BELOW

function logSession() 
{
    downloadHeaders();  
}

// REMOVE FUNCTIONS BELOW

function removeAppCookies() 
{
    return removeCookies();
}

function removeSessionCookies() 
{
    var cookies = getSessionCookies();
    return removeCookies(cookies);
}

// RESET FUNCTIONS BELOW

function resetApp() 
{
    var appId = getNewAppId();
    removeAppCookies(); // removes ALL cookies in fact
    addToHome.reset(); 
    return setAppId(appId);
}

function resetSession() 
{
    if (!hasAppId()) 
    {
        resetApp();
    }
    var appId = getAppId();
    var sessionId = getNewSessionId(appId);
    removeSessionCookies();
    setSessionId(sessionId); 
}

// SAVE FUNCTIONS BELOW

function saveLineItem(lineItem) 
{
    var lineItems = getLineItems();
    lineItems.push(lineItem);
    setSessionCookie("lineItems", JSON.stringify(lineItems));
}

// SET FUNCTIONS BELOW

function setAppCookie(key, value) 
{
  var expiration = getFutureDate(182).toUTCString();
  setCookie("a_" + key, value, expiration);
  return document.cookie;  
}

function setAccountCreated() 
{
    var now = getNow();
    return setAppCookie("accountCreated", now.getTime());
}

function setAppId(id) 
{
    return setAppCookie("appId", id);
}

function setEmail(email) 
{
    return setAppCookie("email", email);
}

function setFirstName(firstName) 
{

    return setAppCookie("firstName", firstName);
}

function setLastName(lastName) 
{
    return setAppCookie("lastName", lastName);
}

function setLineItemDefaults(obj) 
{
    return setCookie("lineItemDefaults", JSON.stringify(obj));
}

function setPhone(phone) 
{
    return setAppCookie("phone", phone);
}

function setRemoteAddr(ip) 
{
    return setCookie("remoteAddr", ip);
}

function setSessionCookie(key, value) 
{
  var expiration = getFutureDate(7).toUTCString();
  setCookie("s_" + key, value, expiration);
  return document.cookie;  
}

function setSessionId(id) 
{
    return setSessionCookie("sessionId", id);
}

function setUserAgent(browser) 
{
    return setCookie("userAgent", browser);    
}

// UPLOAD FUNCTIONS BELOW

function upload(name, url, data) 
{
    ajaxGet(name, url, data, "upload"); 
}

function uploadAccount(formData) 
{
    var url = "https://script.google.com/macros/s/AKfycby0-GJHdxZIxC0H_8-fe3JHtiQNpOHsmNXEJB4NpOLAWCJt4ELF/exec";
    formData.name = "account";
    formData.appId = getAppId();
    upload("account", url, formData);    
}

function uploadFile(name, blob) 
{
    var formData = new FormData();
    formData.append("key", name);
    formData.append("GoogleAccessId", "GOOGBEINSY3AB37BXYLW");
    formData.append("acl", "bucket-owner-full-control");
    formData.append("success_action_status", 201);
    formData.append("policy", "eyJleHBpcmF0aW9uIjoiMjAxNS0wMS0wMVQwMDowMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwxMDAwMDAwMF0seyJhY2wiOiJidWNrZXQtb3duZXItZnVsbC1jb250cm9sIn0seyJidWNrZXQiOiJ5Yy1kcm9wYm94In0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifV19");
    formData.append("signature", "0MmCIjoWe89Od8wIVA2aGbSAf6M=");
    formData.append("file", blob);
    showLoader(getTranslation(getDictionary(), "wait", getAllLanguages())); 
    ajaxPost(formData);
}

function uploadHeaders(data) 
{
    var formData = {};
    var url = "https://script.google.com/macros/s/AKfycby0-GJHdxZIxC0H_8-fe3JHtiQNpOHsmNXEJB4NpOLAWCJt4ELF/exec";
    formData.name = "log";
    formData.sessionId = getSessionId();
    formData.remoteHost = data.REMOTE_ADDR;
    formData.userAgent = data.HTTP_USER_AGENT;
    upload("headers", url, formData);
}

function uploadLineItem(formData) 
{
    var url = "https://script.google.com/macros/s/AKfycby0-GJHdxZIxC0H_8-fe3JHtiQNpOHsmNXEJB4NpOLAWCJt4ELF/exec";
    formData.name = "add";
    upload("lineItem", url, formData);    
}

function test() 
{
    var formData = {};
    var url = "https://script.google.com/macros/s/AKfycby0-GJHdxZIxC0H_8-fe3JHtiQNpOHsmNXEJB4NpOLAWCJt4ELF/exec";
    formData.name = "checkout";
    formData.orders = ["apple","orange","banana","watermelon","pineapple"];
    upload("headers", url, formData);
}