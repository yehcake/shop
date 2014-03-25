<?php include "../include/header.php"; ?>
<div id="customPage" data-role="page" data-add-back-btn="true" data-title="Custom Order">
    <div data-role="panel" data-display="overlay" id="customPanel">
        <h3>例子 Examples</h3>
        <p>即將推出 Coming Soon</p>
        <a href="#closeCustomPanel" data-rel="close" class="ui-btn ui-mini ui-shadow ui-corner-all ui-icon-delete ui-btn-icon-left ui-btn-inline">關閉 Close</a>
    </div><!-- /panel -->
    <div role="main" class="ui-content"> 
        <a href="#customPanel" class="ui-btn ui-mini ui-shadow ui-corner-all ui-btn-inline ui-btn-icon-left ui-icon-bars ui-btn-b yc-button-example">例子 Examples</a>
        <div id="customPagePlaceholder"></div>
    </div>
</div>
<?php include "../include/footer.php"; ?>