// CREATE FUNCTIONS BELOW

function createAccountPage() 
{
    var metaData = getFormFieldsMetaData();
    var fields = getAccountFields();
    var name = "save";
    var $buttons = createField(name, metaData[name].type, metaData[name].isRequired, metaData[name].placeholder)
    var $form = createSimpleForm(metaData, fields, $buttons);
    return $form;     
}

function createCustomCakeForm() 
{
    var metaData = getFormFieldsMetaData();
    var fields = getCustomCakeFields();
    var name = "inquire";
    var $buttons = createField(name, metaData[name].type, metaData[name].isRequired, metaData[name].placeholder)
    var $form = createForm(metaData, fields, $buttons);
    return $form;   
}

function createDataSheet(url) 
{
    var attributes = {"data-rel":"popup", "data-icon":"delete", "data-iconpos":"notext", "data-position-to":"window"};
    attributes.href = "#popup-presentation";
    attributes.class = "ui-btn-right";
    /* attributes.src = url;
    attributes.frameborder = "0";
    attributes.width = "300";
    attributes.height = "457";
    attributes.allowfullscreen = "true"; 
    attributes.mozallowfullscreen = "true";
    attributes.webkitallowfullscreen = "true"; */
    var img = "<img src='../custom/cover.gif' alt='Cover Photo' class='yc-form-cover-photo'>";
    var $anchor = createElement("a", attributes, img);
    var $result = createElement("div", {}, img);
    return $result;
}

function createElement(tagName, attributes, child) 
{
    var $result = $(document.createElement(tagName));
    if (hasValue(attributes)) 
    {
        $result.attr(attributes);    
    }
    if (hasValue(child)) 
    {
        $result.append(child);    
    }
    return $result;
}

function createErrorBlock(name, msg) 
{
    var errorMsg = "這裡必須填入資料。Valid data is required here.";
    var attributes = {};
    attributes.class = "ui-helper-hidden ui-state-error ui-state-error-text";
    attributes.id = name + "ErrorMsg";
    if (hasValue(msg)) 
    {
        errorMsg = msg;
    }
    return createElement("div", attributes, errorMsg);
}

function createField(name, type, isRequired, placeholder) 
{
    var $result;
    var attributes = { "data-mini": "true", "data-clear-btn": "true" };
    attributes.id = name;
    attributes.name = name;
    if (isRequired) 
    {
        attributes.class = "yc-required";
    }
    switch (type) 
    {
        case "button":
            attributes.href = "#";
            attributes.class = "ui-btn ui-mini ui-corner-all ui-btn-active yc-submit";
            $result = createElement("a", attributes, placeholder);
            break;
        case "select":
            $result = createElement("select", attributes);
            break;
        default:
            attributes.type = type;
            if (hasValue(placeholder)) 
            {
                attributes.placeholder = placeholder;    
            }
            $result = createElement("input", attributes);
    }
    $result.addClass("yc-form-field");
    return $result;
}

function createForm(metaData, fields, buttons) 
{
    var $grid = createGrid(3, "yc-form");

    for (var i = 0; i < fields.length; i++) 
    {
        var $field = createFormField(fields[i], metaData[fields[i]].type, metaData[fields[i]].title, metaData[fields[i]].tip, metaData[fields[i]].isRequired, metaData[fields[i]].placeholder, metaData[fields[i]].error);
        if (isOdd(i+1)) 
        {
            $grid.children("div[class='ui-block-a']").append($field);
        }
        else 
        {
            $grid.children("div[class='ui-block-b']").append($field);
        }
    }
    $grid.children("div[class='ui-block-c']").append(buttons);
    $grid.children("div[class='ui-block-c']").append("<div class='yc-form-note'>※ 我們將依照你的要求email一個估價單給你。We will email you a proposal in the form of an invoice after we review your inquiry.</div>");
    $grid.children("div[class='ui-block-c']").append(createLineItemId());
    return $grid;
}

function createFormField(name, type, title, tip, isRequired, placeholder, error) 
{
    var $grid = createGrid(3, "yc-form-field");
    if (isRequired)
    {
        var $label = createLabel(name, title + " *");
    }
    else
    {
        var $label = createLabel(name, title);
    }
    var $formField = createField(name, type, isRequired, placeholder);
    var $toolTip = createToolTip(name, tip);
    var $errorMsg = createErrorBlock(name, error);
    $grid.children(".ui-block-a").append($label);
    $grid.children(".ui-block-a").append($formField);
    $grid.children(".ui-block-b").append($toolTip);
    $grid.children(".ui-block-c").append($errorMsg);
    return $grid;
}

function createGrid(blocks, classStr) 
{
    var index = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var gridAttr = {};
    gridAttr.class = "ui-grid-" + index[blocks - 2];
    var $result = createElement("div", gridAttr);
    if (hasValue(classStr)) 
    {
        $result.addClass(classStr);
    }
    for (var i = 0; i < blocks; i++) 
    {
        var blockAttr = {};
        blockAttr.class = "ui-block-" + index[i];
        var $block = createElement("div", blockAttr);
        $result.append($block);
    }
    return $result;
}

function createInput(name, type, title, tip, placeholder, error, isRequired) 
{
    var required = false;
    if ((hasValue(isRequired)) && (isRequired)) 
    {
        required = true;
    }
    return createFormField(name, type, title, tip, required, placeholder, error);    
}

function createLabel(name, text) 
{
    var attributes = {};
    attributes.for = name;
    return createElement("label", attributes, text);
}

function createLineItemId() 
{
    var attributes = {};
    attributes.type = "hidden";
    attributes.class = "yc-form-field";
    attributes.name = "id";
    attributes.id = "lineItemId";
    attributes.value = getNewLineItemId(getSessionId());
    return createElement("input", attributes);  
}

function createProductPage(page) 
{
    /* var $grid = createGrid(3, "yc-product");
    var $boilerPlate = createElement("p", null, "&nbsp;");
    var $dataSheet;
    var $form; */
    var metaData = getFormFieldsMetaData();
    var fields;
    var btnName = "inquire";
    var $buttons = createField(btnName, metaData[btnName].type, metaData[btnName].isRequired, metaData[btnName].placeholder);
    switch (page) 
    {
        case "bundtPage":
            fields = getBundtCakeFields();
            break;
        case "cakePopsPage":
            fields = getCakePopFields();
            break;
        case "classicPage":
            fields = getClassicCakeFields();
            break;
        case "cupcakesPage":
            fields = getCupcakeFields();
            break;
        case "customPage":
            //$dataSheet = createDataSheet("https://docs.google.com/presentation/d/1RppCZqjgBSCG9xjtAPbmffQ-5iiQxhhtazolvk2KcPg/embed?start=true&loop=true&delayms=3000");
            //$form = createCustomCakeForm();
            fields = getCustomCakeFields();
            break;
        case "picturePage":
            fields = getPictureCakeFields();
            break;
        case "rentalsPage":
            fields = getRentalFields();
            break;
        default:
            break;
    }
    /*$grid.children("div[class='ui-block-a']").append($dataSheet);
    $grid.children("div[class='ui-block-b']").append($form);
    $grid.children("div[class='ui-block-c']").append($boilerPlate);
    return $grid;*/
    var $form = createForm(metaData, fields, $buttons);
    return $form;
}

function createSelect(name, title, tip, isRequired) 
{
    var required = false;
    if ((hasValue(isRequired)) && (isRequired)) 
    {
        required = true;
    }
    return createFormField(name, "select", title, tip, required);
}

function createSimpleForm(metaData, fields, buttons) 
{
    var attributes = {}
    attributes.style = "width:18.125em; margin-left:auto; margin-right:auto;";
    var $result = createElement("div", attributes);

    for (var i = 0; i < fields.length; i++) 
    {
        var $field = createFormField(fields[i], metaData[fields[i]].type, metaData[fields[i]].title, metaData[fields[i]].tip, metaData[fields[i]].isRequired, metaData[fields[i]].placeholder, metaData[fields[i]].error);
        $result.append($field);
    }
    $result.append(buttons);
    return $result;    
}

function createToolTip(name, msg) 
{
    var tip = "如有任何問題，歡迎與我們聯絡。Please contact us if you have any questions.";

    if (hasValue(msg)) 
    {
        tip = msg;
    }

    var anchorAttr = {"data-rel":"popup", "data-transition":"pop"};
    anchorAttr.href = "#" + name + "ToolTip"; 
    anchorAttr.class = "my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext";
    anchorAttr.title = "Info";
    var $anchor = createElement("a", anchorAttr, "Info");

    var popupAttr = {"data-role":"popup", "data-theme":"a"};
    popupAttr.id = name + "ToolTip";
    popupAttr.class = "ui-content";
    popupAttr.style = "max-width:350px;";
    var $popup = createElement("div", popupAttr, "<p>" + tip + "</p>");

    var $toolTip = createElement("div");
    $toolTip.append($anchor);
    $toolTip.append($popup);
    return $toolTip;
}

// GET FUNCTIONS BELOW

function getAttrObj(name, type, title, tip, isRequired, placeholder, error)  
{
    var result = {};
    result.error = initValue(error);
    result.isRequired = initValue(isRequired);
    result.name = initValue(name);
    result.placeholder = initValue(placeholder);
    result.tip = initValue(tip);
    result.title = initValue(title);
    result.type = initValue(type);
    return result;
}

function getDefaultSelectFieldOptions() 
{
    var result = [];
    
    var dates = {};
    dates.id = "dueDate";
    dates.options = getDates(100, 1);
    result.push(dates);

    var times = {};
    times.id = "dueTime";
    times.options = getTimes(9, 18, 30);
    result.push(times);

    var flavors = {};
    flavors.id = "flavor";
    flavors.options = getFlavors();
    result.push(flavors);

    var genders = {};
    genders.id = "guestOfHonorGender";
    genders.options = getGender();
    result.push(genders);

    return result;
}

// HIDE FUNCTIONS BELOW

function hideError(element) 
{
    
}

function hideLoader() 
{
    $.mobile.loading("hide");
}

// INIT FUNCTIONS BELOW

function initAccountPage() 
{
    if (hasAccountCreated()) 
    {
        $("#lastName").val(getLastName());
        $("#firstName").val(getFirstName());
        $("#phone").val(getPhone());
        $("#email").val(getEmail());
    }                
}

function initBundtForm() 
{
    var selectFields = getDefaultSelectFieldOptions();
    selectFields.push({id:"item",options:getProductVariants("bundt")});
    initFormFields(selectFields);    
}

function initCakePopForm() 
{
    var selectFields = getDefaultSelectFieldOptions();
    selectFields.push({id:"item",options:getProductVariants("cakePops")});
    initFormFields(selectFields);      
}

function initClassicCakeForm() 
{
    var selectFields = getDefaultSelectFieldOptions();
    selectFields.push({id:"item",options:getProductVariants("classic")});
    initFormFields(selectFields);
}

function initCupcakeForm() 
{
    var selectFields = getDefaultSelectFieldOptions();
    selectFields.push({id:"item",options:getProductVariants("cupcakes")});
    initFormFields(selectFields);    
}

function initCustomCakeForm() 
{
    var selectFields = getDefaultSelectFieldOptions();
    selectFields.push({id:"item",options:getProductVariants("custom")});    

    var dates = {};
    dates.id = "dueDate";
    dates.options = getDates(100, 3);
    selectFields = spliceSelectFields(selectFields, dates);

    initFormFields(selectFields);
}

function initDocumentReady(path) 
{
    //initSession(path);
    initEvents(path);
    initToolbar(path);
    if (path == "/") 
    {
        addToHome.show();
    }
}

function initFormFields(selectFields) 
{
    for (var i = 0; i < selectFields.length; i++) 
    {
        if (hasValue(document.getElementById(selectFields[i].id))) 
        {
            initSelect(selectFields[i].id, selectFields[i].options);
        }        
    }
}

function initPageBeforeCreate(page) 
{
    console.log("initPageBeforeCreate: " + page);
    initSession();
    if ($("#" + page + "Placeholder").length > 0) 
    {
        switch (page) 
        {
            case "accountPage":
                $("#" + page + "Placeholder").replaceWith(createAccountPage());
                break;
            case "classesPage":
                break;
            case "homePage":
                break;
            case "resetPage":
                resetApp();
                break;
            case "storePage":
                break;
            default:
                $("#" + page + "Placeholder").replaceWith(createProductPage(page));    
        }
    }
}

function initPageCreate(page) 
{
    console.log("initPageCreate: " + page);
    switch (page) 
    {
        case "accountPage":
            initAccountPage();
            break;
        case "bundtPage":
            initBundtForm();
            break;
        case "cakePopsPage":
            initCakePopForm();
            break;
        case "classicPage":
            initClassicCakeForm();
            break;
        case "cupcakesPage":
            initCupcakeForm();
            break;
        case "customPage":
            initCustomCakeForm();
            break;
        case "picturePage":
            initPictureForm();
            break;
        case "rentalsPage":
            initRentalForm();
            break;
        default:
            break;
    }
}

function initPageShow(page) 
{
    console.log("initPageShow: " + page);
    // Change the heading
    $( "[data-role='header']>h1" ).text( page );
    var prefix = "http://www.addthis.com/bookmark.php?url=http%3A%2F%2Fshop.yehcake.com%2F";
    var suffix;
    switch (page) 
    {
        case "Bundt Cakes":
            suffix = "bundt";
            break;
        case "Cake Pops":
            suffix = "cakepops";
            break;
        case "Classic Cakes":
            suffix = "classic";
            break;
        case "Cupcakes":
            suffix = "cupcakes";
            break;
        case "Custom Order":
            suffix = "custom";
            break;
        case "Picture Cakes":
            suffix = "picture";
            break;
        case "Yeh! Cake":
            suffix = "";
            break;
        default:
            suffix = page.toLowerCase();
    }
    $(".button-share").attr("href", prefix + suffix);
    // Remove active class from nav buttons
    $( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
    // Add active class to current nav button
    $( "[data-role='navbar'] a" ).each(function() {
        if ( $( this ).text() === page ) {
            $( this ).addClass( "ui-btn-active" );
        }
    });
}

function initPictureForm() 
{
    var selectFields = getDefaultSelectFieldOptions();
    selectFields.push({id:"item",options:getProductVariants("picture")});
    initFormFields(selectFields);     
}

function initRentalForm() 
{
    var selectFields = getDefaultSelectFieldOptions();
    selectFields.push({id:"item",options:getProductVariants("rentals")});
    initFormFields(selectFields);     
}

function initSelect(id, options)
{
    var option;
    $("#" + id).append("<option value='' selected='selected'>請選擇 Please Select...</option>");
    for (var i = 0; i < options.length; i++) {
        option = '<option value="' + options[i].value + '">' + options[i].text + '</option>';
        $("#" + id).append(option);
    }
}

function initToolbar(page) 
{
    $("[data-role='navbar']").navbar();
    $("[data-role='header'], [data-role='footer']").toolbar();
}

// NOTIFY FUNCTIONS BELOW

function notify(msg, path) 
{
    var now = getNow();
    var id = "popup-" + now.getTime();
    var header = "<div data-role='header' data-theme='a'><h1>注意事項 Notice</h1></div>";
    var body = "<div role='main' class='ui-content'><h3 class='ui-title'>" + msg + "</h3>";
    var footer = "<a href='#' class='ui-btn ui-corner-all ui-shadow ui-btn-inline' data-rel='back'>OK</a></div>";
    var attributes = {"data-role":"popup"};
    attributes.id = id;
    attributes.name = id;
    var $popup = createElement("div", attributes, body + footer);
    $("#" + getPageId() + " div[role='main']").append($popup);
    $("#" + id).popup({
        create: function (event, ui)
        {
            $("#" + id).popup("open");
        },
        afterclose: function (event, ui)
        {
            $("#" + id).popup("destroy");
            $("#" + id).remove();
            if (hasValue(path))
            {
                goTo(getLocalUrl(path));
            }
        }
    });
}

// SHOW FUNCTIONS BELOW

function showError(element) 
{
    
}

function showLoader(msgText) 
{
    var theme = $.mobile.loader.prototype.options.theme;
/*     var $this = element,
         theme = $this.jqmData("theme") || $.mobile.loader.prototype.options.theme,
         msgText = $this.jqmData("msgtext") || $.mobile.loader.prototype.options.text,
         textVisible = $this.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible,
         textonly = !!$this.jqmData("textonly"); 
    html = $this.jqmData("html") || ""; */
    $.mobile.loading("show", {
        //text: msgText,
        text: msgText + "...",
        //textVisible: textVisible,
        textVisible: true,
        theme: theme,
        //textonly: textonly,
        textonly: false,
        //html: html
        html: ""
    });
}

function showSaveFailed() 
{
    notify("保存失敗 Save failed!");
}

function showSaveSuccess() 
{
    notify("成功 Success!", "products");
}

function showUploadFailed() 
{
    notify("上傳失敗 Upload failed!");
}

function spliceSelectFields(selectFields, replacement) 
{
    for (var i = 0; i < selectFields.length; i++) 
    {
        if (selectFields[i].id == replacement.id)
        {
            selectFields.splice(i, 1, replacement);
            break;
        }
    }
    return selectFields;
}