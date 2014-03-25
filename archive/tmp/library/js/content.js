// UTILITIES & JQUERY LIBRARY MUST BE LOADED BEFORE THIS LIBRARY

function getFeedbackDialog(config) {
    var size = 60;
    var innerHtml = "";
    var formAttr = getGlobalAttributes(null, "feedbackForm", null, null);
    innerHtml += getFormField(1, getTranslation("Your email", config.locale), "email", size, null);
    innerHtml += getFormField(1, getTranslation("Your issue", config.locale), "feedback", size, null);
    innerHtml += getDiv(null, "recaptcha", null, null);
    innerHtml += getFormField(0, null, "remoteAddr", size, null);
    innerHtml += getFormField(0, null, "httpReferer", size, null);
    innerHtml += getFormField(0, null, "userAgent", size, null);
    return getDiv(null, "feedbackFormDialog", null, getHtml("form", formAttr, innerHtml));
}

function hideFeedbackDialog() {
    Recaptcha.destroy();
    $("#feedbackFormDialog").remove();   
}

function showFeedbackDialog(config) {
    $("#visibleSection").append(getFeedbackDialog(config));
    showRecaptcha("recaptcha");
    $("#feedbackFormDialog").dialog({
        title: getTranslation("Send feedback", config.locale) + " / " + getTranslation("Report a bug", config.locale),
        modal: true,
        hide: "clip",
        show: "clip",
        width: 600,
        resizable: false,
        buttons: {
            "Cancel 取消": function () {
                $("#feedbackFormDialog").dialog("close");
            },
            "Submit 傳送": function () {
                showProgressIndicator(config);
                $( "#remoteAddr" ).val(getRemoteAddr());
                $( "#httpReferer" ).val(getReferer());
                $( "#userAgent" ).val(getUserAgent());

                var shortenedFeedback = $("#feedback").val();
                $("#feedback").val(shortenedFeedback.substring(0, 700));

                var feedbackApp = "https://script.google.com/macros/s/AKfycbzDxoMdFKO96zUm4xcb45EF58biXfYV8oUIKupLEwdiZZuSyns/exec";
                $.get(feedbackApp, $("#feedbackForm").serialize(), function (data) {
                    hideProgressIndicator(config);
                    if (data == 0) {
                        $("#feedbackFormDialog").dialog("close");
                    } else {
                        //$("#recaptchaLabel").css("color", "red");
                        Recaptcha.reload();
                    }
                }, "jsonp");
            }
        }, close: function () {
            hideFeedbackDialog();
        }
    });
}

function getProgressIndicator() {
    var imageAttr = getSimpleImageAttributes(getUrl(getBaseHref("www"), "library/image/progress_spinner_66x66.gif", null), "ui-spinner-medium", null);
    return getDiv(null, "progressIndicatorDialog", null, getHtml("img", imageAttr, null));
}

function hideProgressIndicator(config) {
    $("#progressIndicatorDialog").remove();
}

function showProgressIndicator(config) {
    $("#visibleSection").append(getProgressIndicator());
    $("#progressIndicatorDialog").dialog({
    	title: getTranslation("Please wait", config.locale) + "...",
    	modal: true,
    	width: 250,
    	resizable: false,
    	stack: true,
        close: function() {
    	    hideProgressIndicator(config);
        }
	});
}

function getTestimonials() {
    var testimonials = "We loved all the cakes so much that we ordered them two weeks in a row!  My coworkers kept talking about them after the first time we had one.  The cakes are delicious and moist and the frosting is amazing.  It was just the right sweetness to complement the cake and definitely the best cake I’ve had in Taiwan. ~Leo L. |Hands down this is the BEST cake I've had in Taiwan! ~Simone S. | WOW - yum.  You totally did it.  The frosting was infused with the flavor of strawberries.  It was not overpowering, nor overly sweet.  So, good. ~Ivonne V. |Your carrot cake was even better than our wedding cake! ~Randy C. |The cake was a huge hit! Everyone loved it and wanted seconds. ~Nathan P. |  The party was a huge success, thanks to you!  The cakes looked great, tasted even better, and the top-notch service was icing on the cake, so to speak! ~Cindy T.";
   	return testimonials;
}
        
function getShortTestimonial(str, len) {        
    var quote = str;
    var author = "";
        
    if (len > -1) {
        var i = str.lastIndexOf("~");
        if (i > -1) {
        	quote = jQuery.trim(str.substring(0, i));
        	author = jQuery.trim(str.substring(i+1));
        }
        var quoteMaxLen = len - author.length - 7;
        if (quote.length > quoteMaxLen) {
        	quote = jQuery.trim(quote.substring(0, quoteMaxLen)) + "...";
        }
        return '"' + quote + '" ~' + author;
    } else {
        return jQuery.trim(str);
    }
}

function getTranslation(str, locale) {
	if (locale == "zh-TW") {
		return getZhTwTranslation(str);
	} else {
		return str;
	}
}

function getDivBreak() {
    return getDiv("ui-clear-float", null, null, null);
}

function getHeaderNorthWest(config) {
	var linkAttr = getLinkAttributes(getBaseHref("www"), null, null, null, "logoLink", null, null);
	var imgAttr = getImageAttributes(getBaseHref("image") + "yehcake_logo_124x59.png", "Yeh! Cake Logo", 59, 124, null, "ui-image-clickable", "logoImage", null, null);
	return getDiv("ui-header-north-west", "headerNorthWest", null, getClickableImage(linkAttr, imgAttr));
}

function getHeaderNorth(config) {
	return getDiv("ui-header-north", "headerNorth", null, getDiv("ui-text-testimonial", "testimonialText", null, null));
}

function getTranslateLink() {
    var text;
    if (getLocale() == "en") {
        text = "中文";
    } else {
        text = "English";
    }
    var attr = getSimpleLinkAttributes(getUrl("http://" + location.host, location.pathname, getInverseLocaleAsQueryString()), null, "translationLink");
    return getHtml("a", attr, text);
}

function getHeaderNorthEast(config) {
	return getDiv("ui-header-north-east", "headerNorthEast", null, getTranslateLink());
}

function getNavBarLabel(id, label) {
	var result = {};
	result.id = id;
	result.label = label;
	return result;
}

function getNavBarLabels(config) {
	var result = [];
	var home = getNavBarLabel("navbarHomeButton", getTranslation("Home", config.locale));
	var about = getNavBarLabel("navbarAboutButton", getTranslation("About Us", config.locale));
	var category = getNavBarLabel("navbarCategoryButton", getTranslation("Shop By Category", config.locale));
	var price = getNavBarLabel("navbarPriceButton", getTranslation("Shop By Price", config.locale));
	var occasion = getNavBarLabel("navbarOccasionButton", getTranslation("Shop By Occasion", config.locale));
	var specials = getNavBarLabel("navbarSpecialsButton", getTranslation("Specials", config.locale));
	var contact = getNavBarLabel("navbarContactButton", getTranslation("Contact Us", config.locale));
	result.push(home);
	result.push(about);
	result.push(category);
	result.push(price);
	result.push(occasion);
	result.push(specials);
	result.push(contact);	
	return result;
}

function formatNavBar() {
	$("nav").buttonset();
	$( "#navbarHomeButton" ).button({
 		icons: { primary: "ui-icon-home" },
		text: false
	});
	$( "#navbarAboutButton" ).button({
 		icons: { primary: "ui-icon-person" }
	});
	$( "#navbarCategoryButton" ).button({
        icons: { primary: "ui-icon-disk" }
	});
	$( "#navbarPriceButton" ).button({
        icons: { primary: "ui-icon-tag" }
	});
	$( "#navbarOccasionButton" ).button({
    	icons: { primary: "ui-icon-heart" }
	});
	$( "#navbarSpecialsButton" ).button({
    	icons: { primary: "ui-icon-star" }
	});												
	$( "#navbarContactButton" ).button({
    	icons: { primary: "ui-icon-comment" }
	});
	$( "#navbarHomeButton" ).click(function() {   
		$(location).attr("href", getUrl(getBaseHref("www"), null, getLocaleAsQueryString()));
	});
	$( "#navbarAboutButton" ).click(function() {   
		$(location).attr("href", getUrl(getBaseHref("www"), "about/", getLocaleAsQueryString()));
	});
	$( "#navbarCategoryButton" ).click(function() {   
		$(location).attr("href", getUrl(getBaseHref("www"), "shop/category/", getLocaleAsQueryString()));
	});
	$( "#navbarPriceButton" ).click(function() {   
		$(location).attr("href", getUrl(getBaseHref("www"), "shop/price/", getLocaleAsQueryString()));
	});
	$( "#navbarOccasionButton" ).click(function() {   
		$(location).attr("href", getUrl(getBaseHref("www"), "shop/occasion/", getLocaleAsQueryString()));
	});	
	$( "#navbarSpecialsButton" ).click(function() {   
		$(location).attr("href", getUrl(getBaseHref("www"), "shop/specials/", getLocaleAsQueryString()));
	});					
	$( "#navbarContactButton" ).click(function() {   
		$(location).attr("href", getBaseHref("www") + "contact/");
	});		
}

function getNavBar(config) {
	var innerHtml = "";
    var navAttr = getGlobalAttributes(null, "navBar", null, null);
	var buttons = getNavBarLabels(config);
	for (var i = 0; i < buttons.length; i++) {
		if (i == config.activeNavBarButton) {
			innerHtml += getRadioButton(buttons[i].id, buttons[i].label, true);
		} else {
			innerHtml += getRadioButton(buttons[i].id, buttons[i].label, false);
		}
	}
	return getHtml("nav", navAttr, innerHtml);
}

function getHeaderWest(config) {
	return getDiv("ui-header-west", "headerWest", null, getNavBar(config));
}

function getFacebookButton() {
	var linkAttr = getLinkAttributes(getBaseHref("facebook"), null, null, null, "facebookLink", null, null);
	var imgAttr = getImageAttributes(getBaseHref("image") + "facebook_logo_f_20x20.png", "Facebook Button", 20, 20, null, "ui-image-clickable", "facebookButton", null, "Find us on Facebook.");
	return getClickableImage(linkAttr, imgAttr);
}

function getPinterestButton() {
	var linkAttr = getLinkAttributes(getBaseHref("pinterest"), null, null, null, "pinterestLink", null, null);
	var imgAttr = getImageAttributes(getBaseHref("image") + "pinterest_button_57x20.png", "Pinterest Button", 20, 57, null, "ui-image-clickable", "pinterestButton", null, "Find us on Pinterest.");
	return getClickableImage(linkAttr, imgAttr);
}

function getAddThisButton() {
	var linkAttr = getLinkAttributes(getBaseHref("addthis") + "bookmark.php", null, null, "addthis_button", "addThisLink", "text-decoration:none;", null);
	var imgAttr = getImageAttributes(getBaseHref("image") + "addThis_button_share_50x20.png", "Bookmark & Share", 20, 50, null, "ui-image-clickable", "addThisButton", null, "Share this page.");
	return getClickableImage(linkAttr, imgAttr);
}

function getFooterSouthWest(config) {
    return getDiv("ui-footer-south-west", "footerSouthWest", null, null);
}

function getFooterSouth(config) {
	return getDiv("ui-footer-south", "footerSouth", null, getDiv("ui-social-buttons", "socialButtons", null, getFacebookButton() + " " + getPinterestButton() + " " + getAddThisButton()));
}

function getFooterSouthEast(config) {
    var buttonAttr = getGlobalAttributes("ui-button-feedback", "feedbackButton", null, null);
    return getDiv("ui-footer-south-east", "footerSouthEast", null, getHtml("button", buttonAttr, getTranslation("Send Feedback", config.locale)));
}

function getHeader(config) {
	var innerHtml = getHeaderNorthWest(config) + getHeaderNorth(config) + getHeaderNorthEast(config) + getDivBreak() + getHeaderWest(config);
	return getHtml("header", null, innerHtml);
}

function applyHeader(config) {
	var header = getHeader(config);
	$("#contentContainer").append(header);
	formatNavBar();
	$( "#testimonialText" ).text(getShortTestimonial(getRandomText(getTestimonials()), 60));
}

function getFooter(config) {
	var innerHtml = getFooterSouthWest(config) + getFooterSouth(config) + getFooterSouthEast(config) + getDivBreak();
	return getHtml("footer", null, innerHtml);
}

function applyFooter(config) {
	var footer = getFooter(config);
	$("#contentContainer").append(footer);
	loadScript("http://s7.addthis.com/js/250/addthis_widget.js");
    $( "#feedbackButton" ).click(function() {
		//showRecaptcha("recaptcha");
		showFeedbackDialog(config);
	});
}

function getBreadcrumb(config) {
    var linkAttr;
    var txt;
    var innerHtml = "";
    if (jQuery.isArray(config.breadcrumb)) {
        for (var i = 0; i < config.breadcrumb.length; i++) {
            linkAttr = getSimpleLinkAttributes(config.breadcrumb[i].url, null, null);
            txt = config.breadcrumb[i].text;
            innerHtml += getHtml("a", linkAttr, getTranslation(txt, config.locale));
            innerHtml += " &gt; ";
        }
    }
    return getDiv("ui-text-breadcrumb", "breadcrumb", null, innerHtml);
}

function getInfoTemplateWest(config) {
	if (config.locale == "zh-TW") {
		content = $("#content_zh-TW").html();
	} else {
		content = $("#content_en").html();
	}
	return getDiv("ui-body-west", "infoTemplateWest", null, getBreadcrumb(config) + getDiv("ui-content-main", "contentMain", null, content));
}

function getInfoTemplateEast(config) {
	var linkAttr = getLinkAttributes(config.banner1.link, null, null, null, null, null, null);
	var imgAttr = getImageAttributes(config.banner1.image, config.banner1.title, 460, 300, null, "ui-image-clickable", null, null, "Click for more details.");
	return getDiv("ui-body-east", "infoTemplateEast", null, getClickableImage(linkAttr, imgAttr));
}

function getInfoTemplate(config) {
    var attr = getGlobalAttributes("ui-body-main", null, null, null);
	var innerHtml = getInfoTemplateWest(config) + getInfoTemplateEast(config) + getDivBreak();
	return getHtml("section", attr, innerHtml);
}

function getBody(config) {
    var result;
    switch(config.template) {
        case "info": result = getInfoTemplate(config); break;
		default: result = "NO TEMPLATE FOUND";
	}
    return result;
}

function applyBody(config) {
    var innerHtml = getBody(config);
	$("#contentContainer").append(innerHtml);
}

function getInitConfig() {
    var result = {};
    result.locale = getLocale();
    result.path = location.href.replace(location.search, "").toLowerCase().replace(getBaseHref("www"), "");
    return result;
}

function getErrorPageConfig(config) {
    var result = config;
    result.title = "Error Detected";
    result.systemMessage = 'This page did not load correctly.  Please inform <a href="mailto:info@yehcake.com">info@yehcake.com</a>.';
    return result;
}

function applyTitle(config) {
    $("title").text(config.title);
}

function erasePage(config) {
    $("#contentContainer").empty();
    $("#systemMessage").empty();
}

function initContent() {

    var initConfig = getInitConfig();

	switch(initConfig.path) {
	    case "tmp/test.htm": var config = getTestPageConfig(initConfig); break;
		default: var config = getErrorPageConfig(initConfig);
	}
    
    erasePage(config);
    applyTitle(config);
	applyHeader(config);	
	applyBody(config);
	applyFooter(config);
    setRemoteAddr();
	//alert(getFeedbackDialog(config));
}