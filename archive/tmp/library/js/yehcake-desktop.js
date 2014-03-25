            function setLocation(url) {

                if (typeof (history.pushState) === "function") {
                    var productID = "foobar";
                    var stateObj = { product: productID };
                    history.pushState(stateObj, productID, url);
                }
            }

            function getPageParameters() {
                var results = [];
                var queryString = location.search.split("?");
                if (queryString.length > 1) {
                    // something in the query string
                    var parameters = queryString[1].split("&");
                    if (parameters.length > 0) {
                        // at least one parameter
                        for (var i = 0; i < parameters.length; i++) {
                            var pair = parameters[i].split("=");
                            if (pair.length > 1) {
                                // well-formed key-value pair
                                var result = {};
                                result.key = pair[0];
                                result.value = decodeURIComponent(pair[1]);
                                results.push(result);
                            }
                        }
                    }
                }
                return results;
            }

            function getPageParameter(key) {
                var result = null;
                var parameters = getPageParameters();
                for (var i = 0; i < parameters.length; i++) {
                    if (parameters[i].key.toLowerCase() == key) {
                        result = parameters[i].value;
                        break;
                    }
                }
                return result;
            }

            function getWidgetURL(content) {
                var result;
                var baseHref = "http://www.yehcake.com/";
                var widgetLibraryHref = baseHref + "library/widget/";
                switch (content) {
                    case "about": result = widgetLibraryHref + "about/"; break;
                    case "contact": result = widgetLibraryHref + "contact/"; break;
                    case "events": result = widgetLibraryHref + "events/"; setLocation(baseHref + "?content=events"); break;
                    case "faq": result = widgetLibraryHref + "faq/"; break;
                    case "newsletter": result = widgetLibraryHref + "newsletter/"; break;
                    case "order": result = widgetLibraryHref + "order/"; break;
                    case "photos": result = widgetLibraryHref + "photos/"; break;
                    case "pricing": result = widgetLibraryHref + "pricing/"; break;
                    case "products": result = widgetLibraryHref + "products/"; break;
                    case "subscribe": result = widgetLibraryHref + "subscribe/"; break;
                    case "navbarButtonAbout": result = widgetLibraryHref + "about/"; setLocation(baseHref + "?content=about"); break;
                    case "navbarButtonContact": result = widgetLibraryHref + "contact/"; setLocation(baseHref + "?content=contact"); break;
                    case "navbarButtonFaq": result = widgetLibraryHref + "faq/"; setLocation(baseHref + "?content=faq"); break;
                    case "navbarButtonPhotos": result = widgetLibraryHref + "photos/"; setLocation(baseHref + "?content=photos"); break;
                    case "navbarButtonProducts": result = widgetLibraryHref + "products/"; setLocation(baseHref + "?content=products"); break;
                    default: result = widgetLibraryHref + "home/"; setLocation(baseHref);
                }
                return result;
            }