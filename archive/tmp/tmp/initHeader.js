$(document).ready(function(){
	$( "#navbar" ).buttonset();
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
		$(location).attr("href", "http://www.yehcake.com/");
	});
	$( "#navbarAboutButton" ).click(function() {   
		$(location).attr("href", "http://www.yehcake.com/about/");
	});
	$( "#navbarCategoryButton" ).click(function() {   
		$(location).attr("href", "http://www.yehcake.com/product/category/");
	});
	$( "#navbarPriceButton" ).click(function() {   
		$(location).attr("href", "http://www.yehcake.com/product/price/");
	});
	$( "#navbarOccasionButton" ).click(function() {   
		$(location).attr("href", "http://www.yehcake.com/product/occasion/");
	});	
	$( "#navbarSpecialsButton" ).click(function() {   
		$(location).attr("href", "http://www.yehcake.com/product/special/");
	});					
	$( "#navbarContactButton" ).click(function() {   
		$(location).attr("href", "http://www.yehcake.com/contact/");
	});
	var url = "https://script.google.com/a/macros/yehcake.com/s/AKfycbxyO7PGOcWN48YJzpgJjiM6KLwoldY_BtoLjLaqm1t-OLkXNj4/exec";     		
    $.get(url, { q: "reviews" }, function(data){
		var quote;
		var k = Math.floor(Math.random() * (data.length + 1));
		while ((data[k] == undefined) || (data[k].review == undefined)) {
			k = Math.floor(Math.random() * (data.length + 1));
 		}
 		if (data[k].review.length > 50 ) {
			quote = data[k].review.substring(0,50) + "... ~";
		} else {
			quote = data[k].review + "~";
		}
		if (data[k].author.length > 10) {
			quote += data[k].author.substring(0,10) + "...";
		} else {
			quote += data[k].author;
		}		
		$( "#headerReview" ).text(quote);
	}, "jsonp"); 																										      		
}); 