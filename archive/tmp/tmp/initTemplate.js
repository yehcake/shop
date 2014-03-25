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
}); 