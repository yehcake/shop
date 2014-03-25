<?php

?>
<!DOCTYPE html>
<html>

    <head>
        <title>Official Photo Gallery | Yeh! Cake</title>
        <meta charset="utf-8" />
		<meta name="robots" content="noindex, nofollow, noodp, noimageindex" />
        <link rel="stylesheet" href="/library/css/jquery-ui-1.10.1.css" />
        <link rel="stylesheet" href="/library/css/yehcake-common.css" />
        <link rel="stylesheet" href="/library/css/yehcake-desktop.css" />
        <script src="/library/js/jquery-1.9.1.js"></script>
        <script src="/library/js/jquery-ui-1.10.1.js"></script>
        <script src="/library/js/yehcake-common.js"></script>
        <script src="/library/js/yehcake-desktop.js"></script>
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

            (function (d, buildThese) {
                var homeScript, newScript, n = buildThese.length, i;
                for (i = 0; i < n; i = i + 1) {
                    newScript = d.createElement('SCRIPT');
                    newScript.type = 'text/javascript';
                    newScript.async = true;
                    newScript.src = buildThese[i];
                    homeScript = d.getElementsByTagName('SCRIPT')[0];
                    homeScript.parentNode.insertBefore(newScript, homeScript);
                }
            } (document, [
              '//assets.pinterest.com/js/pinit.js'
            /* load more third-party JavaScript here */
            ])
            );

            $(document).ready(function () {
            });
		</script>
    </head>
    <body>
        <div class="pinterest-board">
            <div style="font-size: medium; margin-bottom: 10px; padding: 10px; text-align: center;"><a href="http://pinterest.com/yehcake/official-photo-gallery/" target="_blank"><span lang="en-us">More</span> <span lang="zh-tw">更多</span></a></div>
            <a data-pin-do="embedBoard" href="https://pinterest.com/yehcake/official-photo-gallery/" data-pin-scale-height="300" target="_blank"></a>
        </div>
    </body>
</html>
