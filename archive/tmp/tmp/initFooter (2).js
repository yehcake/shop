$(document).ready(function(){
    setLocation($("link[rel='canonical']").attr("href"));
    
    			$( "#feedbackLink" ).click(function() {
					showRecaptcha("recaptcha");
					$( "#feedbackFormDialog" ).dialog( "open" );
				});
    			$( "#feedbackFormDialog" ).dialog({
    				title: "Send feedback / Report a bug / 發送反饋 / 報告錯誤",
    				autoOpen: false,
    				modal: true,
    				hide: "clip",
    				show: "clip",
    				width: 600,
    				resizable: false,
		            buttons: {
                		"Cancel 取消": function() {
                			resetFeedbackForm();                			              		
                		},
        		        "Submit 傳送": function() {
        		        	$( "#progressIndicatorDialog" ).dialog( "open" );
        		        	$( "#remoteAddr" ).val(getRemoteAddr());
        		        	$( "#httpReferer" ).val(getReferer());
        		        	$( "#userAgent" ).val(getUserAgent());
        		        	
        		        	var shortenedFeedback = $( "#feedback" ).val();
        		        	$( "#feedback" ).val(shortenedFeedback.substring(0,700));
        		        	
							var feedbackApp = "https://script.google.com/macros/s/AKfycbzDxoMdFKO96zUm4xcb45EF58biXfYV8oUIKupLEwdiZZuSyns/exec";
							$.get(feedbackApp, $("#feedbackForm").serialize(), function(data){
								$( "#progressIndicatorDialog" ).dialog( "close" );							
								if (data == 0) {
									resetFeedbackForm();
								} else {
									$( "#recaptchaLabel" ).css("color","red");
									Recaptcha.reload();									
								}
							}, "jsonp");
                		}
            		},
            		close: function() {
    					resetFeedbackForm();
            		}
    			});
    			$( "#progressIndicatorDialog" ).dialog({
    				title: "Please wait 請稍後...",
    				autoOpen: false,
    				modal: true,
    				width: 250,
    				resizable: false,
    				stack: true
				});
           		
}); 

// FACEBOOK

(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
					fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));

