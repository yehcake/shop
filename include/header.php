<?php if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') { ?>
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="robots" content="noarchive, noodp, noimageindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes">
        <title>Yeh! Cake</title>
        <link rel="shortcut icon" href="http://m1.behance.net/profiles10/4332619/prosite/2-0-3c9db294cbd0e435e5d1986995e69ddb.ico"  />
        <link rel="apple-touch-icon" href="http://m1.behance.net/profiles10/4332619/prosite/2-0-3701ff02a06ae57122be103ab335ad3e.png" />
        <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" />
        <link rel="stylesheet" href="//code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css" />
        <link rel="stylesheet" href="/css/yehcake.css" />
        <link rel="stylesheet" href="/css/add2home.css" />
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
        <script src="/js/yehcake.js"></script>
        <script src="/js/data.js"></script>
        <script src="/js/cookies.js"></script>
        <script src="/js/helper.js"></script>
        <script src="/js/model.js"></script>
        <script src="/js/view.js"></script>
        <script src="/js/controller.js"></script>
        <script src="/js/event.js"></script>
        <script>
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-35314774-1']);
            _gaq.push(['_setDomainName', 'yehcake.com']);
            _gaq.push(['_setAllowLinker', true]);
            _gaq.push(['_trackPageview']);

            (function () {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        </script>
        <script type="text/javascript">
            var addToHomeConfig = {
                autostart:false, 
                returningVisitor:true,
                touchIcon:true
            };
        </script>
        <script src="/js/add2home.js"></script>
        <script src="//code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>
        <script>
            $(document).on("pagebeforecreate", "[data-role='page']", function ()
            {
                initPageBeforeCreate($(this).attr("id"));
            });
            $(document).on("pagecreate", "[data-role='page']", function ()
            {
                initPageCreate($(this).attr("id"));
            });
            $(document).on("pageshow", "[data-role='page']", function ()
            {
                initPageShow($( this ).jqmData( "title" ));
            });
            $(document).ready(function ()
            {
                initDocumentReady(window.location.pathname);
            });
        </script>
    </head>
    <body>
        <div data-role="header" data-position="fixed" data-fullscreen="false" data-theme="a">
            <a href="/" data-role="button" data-icon="carat-l" data-iconpos="notext" data-rel="back">Back</a>
            <h1>Yeh! Cake</h1>
            <a href="#" class="button-share" data-role="button" data-icon="action" data-iconpos="notext" target="_blank">Share</a>
        </div>
<!-- ======================== END HEADER ======================== -->
<?php } ?>
