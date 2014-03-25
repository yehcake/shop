<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="robots" content="noarchive, noodp, noimageindex" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>購物 Shop | Yeh! Cake</title>
<link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css" />
<link rel="stylesheet" href="//code.jquery.com/mobile/1.4.0/jquery.mobile-1.4.0.min.css" />
<link rel="stylesheet" href="yehcake.css" />
<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="//code.jquery.com/mobile/1.4.0/jquery.mobile-1.4.0.min.js"></script>
<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<script src="yehcake.js"></script>
<script src="yehcake-data.js"></script>
<script>
    $(document).on("pagebeforecreate", "#orderPage", function (event) {
        $(".form-field").each(function (index) {
            $(this).replaceWith(getFormField($(this).text()));
        });
    });
    $(document).on("pagecreate", "#orderPage", function (event) {
        initSelect("time", getTimes(9, 18, 30));
        initSelect("quantity", getQuantities(1, 144, 1));
        initSelect("flavor", getFlavors());
        initSelect("date", getDates(100, 1));
        initSelect("budget", getQuantities(3000, 30000, 1000));
        initAutocomplete("postalCode", getPostalCodes());
    });
    //$(document).on("pageinit", function () {
    $(function () {
        $("[data-role='navbar']").navbar();
        $("[data-role='header'], [data-role='footer']").toolbar();
    });
</script>
</head>
<body>

<!-- begin global header below -->
<div data-role="header" data-position="fixed" data-fullscreen="false" data-theme="a">
  <a href="/" data-role="button" data-icon="carat-l" data-iconpos="notext" data-rel="back">Back</a>
  <h1>Yeh! Cake</h1>
  <a href="#" data-role="button" data-icon="action" data-iconpos="notext">Share</a>
</div>
<!-- end global header above -->

<!-- begin home page below -->
<div id="homePage" data-role="page"><? "home.txt" ?></div>
<!-- end home page above -->

<!-- begin products page below -->
<div id="productsPage" data-role="page"><? "products.txt" ?></div>
<!-- end products page above -->

<!-- begin store page below -->
<div id="storePage" data-role="page"><? "store.txt" ?></div>
<!-- end store page above -->

<!-- begin cart page below -->
<div id="cartPage" data-role="page"><? "cart.txt" ?></div>
<!-- end cart page above -->

<!-- begin account page below -->
<div id="accountPage" data-role="page"><? "account.txt" ?></div>
<!-- end account page above -->

<!-- begin global footer below -->
<div id="footer" data-role="footer" data-position="fixed" data-fullscreen="false" data-theme="a">
  <div data-role="navbar">
    <ul>
      <li><a href="#" data-icon="home">Home</a></li>
      <li><a href="#productsPage" data-icon="tag">Products</a></li>
      <li><a href="#storePage" data-icon="location">Store</a></li>
      <li><a href="#" data-icon="shop">Cart</a></li>
      <li><a href="#" data-icon="user">Account</a></li>
    </ul>
  </div>
</div>
<!-- end global footer above -->

</body>
</html>
