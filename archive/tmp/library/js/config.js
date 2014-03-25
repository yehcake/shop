function getBaseHref(hostname) {
	var result;
	switch(hostname.toLowerCase()) {
		case "addthis": result = "http://www.addthis.com/"; break;
		case "app": result = "http://app.yehcake.com/"; break;
		case "blog": result = "http://blog.yehcake.com/"; break;
		case "docs": result = "http://docs.yehcake.com/"; break;
		case "facebook": result = "http://www.facebook.com/yehcake/"; break;
		case "image": result = "http://assets.yehcake.com/image/"; break;
		case "order": result = "https://script.google.com/macros/s/AKfycby_fDrlAuXXK41NsLeSfhnYvZs_disvR-kVGFvlnLOzCM-Hgs4/exec"; break;
		case "pdf": result = "http://assets.yehcake.com/pdf/"; break;
		case "pinterest": result = "http://www.pinterest.com/yehcake/"; break;
		case "twitter": result = "http://www.twitter.com/yehcake/"; break;
        case "www": result = "http://localhost:17653/"; break;
		//case "www": result = "http://yehcake.azurewebsites.net/"; break;	
		default: result = "/";
	}
	return result;
}

function getZhTwTranslation(str) {
	var result;
	switch(str.toLowerCase()) {
		case "about us": result = "關於我們"; break;
		case "cancel": result = "取消"; break;
		case "contact us": result = "聯繫我們"; break;	
        case "enter verification code below": result = "輸入下面顯示的驗證碼"; break;
		case "feedback": result = "反饋"; break;
		case "home": result = "首頁"; break;
		case "order": result = "訂購"; break;
		case "please wait": result = "請稍後"; break;
		case "report a bug": result = "報告錯誤"; break;
        case "send feedback": result = "發送反饋"; break
		case "shop by category": result = "購物分類"; break;
		case "shop by occasion": result = "購物場合"; break;
		case "shop by price": result = "購物價格"; break;
		case "specials": result = "特價商品"; break;
		case "submit": result = "傳送"; break;
        case "your email": result = "您的電子郵件"; break;
        case "your issue": result = "您的問題"; break;
		default: result = str;
	}
	return result;
}

function getProductTableCellSettings(config, name) {
    var result;
    switch (name.toLowerCase()) {
        case "bundt": result = getProductTableCellSetting(config, name.toLowerCase(), getTranslation("Bundt Cakes", config.locale), "$200 - $1200", getTranslation("slice of comfort", config.locale)); break;
        case "cakepop": result = getProductTableCellSetting(config, name.toLowerCase(), getTranslation("Cake Pops", config.locale), "$400 - $1400", getTranslation("ultimate fun", config.locale)); break;
        case "cupcake": result = getProductTableCellSetting(config, name.toLowerCase(), getTranslation("Cupcakes", config.locale), "$300 - $1300", getTranslation("sophisticated elegance", config.locale)); break;
        case "layered": result = getProductTableCellSetting(config, name.toLowerCase(), getTranslation("Layered Cakes", config.locale), "$100 - $1100", getTranslation("classic celebration", config.locale)); break;
        default: result = null;
    }
    return result;
}

function getTestPageConfig(config) {
    var result = config;
    result.title = "Test Page";
    result.activeNavBarButton = 0;
    result.breadcrumb = [];
    result.breadcrumb.push(getLink(getUrl(getBaseHref("www"), null, getLocaleAsQueryString()), "Home"));
    result.breadcrumb.push(getLink(getUrl(getBaseHref("www"), "about/", getLocaleAsQueryString()), "About Us"));
    result.breadcrumb.push(getLink(getUrl(getBaseHref("www"), "contact/",getLocaleAsQueryString()), "Contact Us"));
    result.banner1 = getBanner(getUrl(getBaseHref("www"), "product/", getLocaleAsQueryString()), getUrl(getBaseHref("image"), "yehcake_banner_3for2_300x460.png", null), "3-for-2");
    result.template = "info";
    return result;
}