<?php if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') { ?>
<!-- ======================== BEGIN FOOTER ======================== -->
        <div id="footer" data-role="footer" data-position="fixed" data-fullscreen="false" data-theme="a">
            <div data-role="navbar">
                <ul>
                    <li><a href="/" data-prefetch="true" data-transition="slide" data-icon="home">Home</a></li>
                    <li><a href="/products/" data-prefetch="true" data-transition="slide" data-icon="tag">Products</a></li>
                    <li><a href="/store/" data-prefetch="true" data-transition="slide" data-icon="location">Store</a></li>
                    <li><a href="/classes/" data-prefetch="true" data-transition="slide"  data-icon="calendar">Classes</a></li>
                    <li><a href="/account/" data-prefetch="false" data-transition="slide"  data-icon="user">Account</a></li>
                </ul>
            </div>
        </div>
    </body>
</html>
<?php } ?>