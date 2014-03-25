function getAutocomplete(name) {
    var result = getLabel(name);
    result += '<ul id="' + name + '" data-role="listview" data-mini="true" data-inset="true" data-filter="true" data-filter-reveal="true" data-filter-placeholder="100"></ul>';
    return result;
}

function getError(name) {
    var result = '<div class="ui-helper-hidden ui-state-error ui-state-error-text">';
    switch (name) {
        default:
            result += "這裡必須填入資料。Valid data is required here.";
    }
    result += '</div>';
    return result;
}

function getFormField(name) {
    var result = '<div class="ui-grid-b yc-form-field"><div class="ui-block-a">';
    var suffix = '</div><div class="ui-block-b">' + getTooltip(name) + '</div><div class="ui-block-c">' + getError(name);
    //var rangeSliderField = getFormRangeSlider(name, 0, 30000) + suffix;
    var autocompleteField = getAutocomplete(name) + suffix;
    var selectField = getFormFieldSelect(name) + suffix;
    var textField = getFormFieldText(name) + suffix;
    switch (name) {
        case "section" : result += textField; break;
        case "lane" : result += textField; break;
        case "alley" : result += textField; break;
        case "number" : result += textField; break;
        case "floor" : result += textField; break;
        case "street" : result += textField; break;
        case "postalCode" : result += autocompleteField; break;
        case "age":
            result += selectField;
            break;
        case "budget":
            result += selectField;
            break;
        case "date":
            result += selectField;
            break;
        case "deliveryAddress":
            result += textField;
            break;
        case "email":
            result += textField;
            break;
        case "firstName":
            result += textField;
            break;
        case "flavor":
            result += selectField;
            break;
        case "gender":
            result += selectField;
            break;
        case "guestOfHonor":
            result += textField;
            break;
        case "inscription":
            result += textField;
            break;
        case "lastName":
            result += textField;
            break;
        case "occasion":
            result += textField;
            break;
        case "phone":
            result += textField;
            break;
        case "quantity":
            result += selectField;
            break;
        case "time":
            result += selectField;
            break;
        default: result += "NULL";
    }
    result += '</div></div>';
    return result;
}

function getFormFieldSelect(name) {
    var result = getLabel(name);
    result += '<select name="' + name + '" id="' + name + '" data-mini="true"><option data-placeholder="true" value=""></option></select>';
    return result;
}

function getFormFieldText(name) {
    var result = getLabel(name);
    result += '<input type="text" name="' + name + '" id="' + name + '" data-mini="true" data-clear-btn="true" value="" placeholder="' + getPlaceholder(name) + '">';
    return result;
}

function getFormRangeSlider(name, min, max) {
    var result = '<div data-role="rangeslider" data-mini="true">';
    result += getLabel(name + "Floor");
    result += '<input name="' + name + 'Floor" id="' + name + 'Floor" min="' + min + '" max="' + max + '" value="' + min + '" type="range">';
    result += getLabel(name + "Ceiling");
    result += '<input name="' + name + 'Ceiling" id="' + name + 'Ceiling" min="' + min + '" max="' + max + '" value="' + max + '" type="range">';
    result += '</div>';
    return result;    
}

function getLabel(name) {
    var result = '<label for="' + name + '">';
    switch (name) {
        case "section" : result += "段 Section"; break;
        case "lane" : result += "巷 Lane"; break;
        case "alley" : result += "弄 Alley"; break;
        case "number" : result += "號 Number"; break;
        case "floor" : result += "樓(室) Floor"; break;
        case "street" : result += "路(街)名或村里名稱 Street"; break;
        case "postalCode" : result += "郵遞區號或縣市/鄉鎮【市】區 City or Postal Code"; break;
        case "age":
            result += "Guest of Honor's Age";
            break;
        case "budget":
            result += "預算 Budget (NT$)";
            break;
        case "budgetFloor":
            result += "預算 Budget";
            break;
        case "date":
            result += "到貨日期 Delivery Date*";
            break;
        case "deliveryAddress":
            result += "送貨地址 Delivery Address";
            break;
        case "email":
            result += "電子郵件 Email";
            break;
        case "firstName" :
            result += "名 First Name";
            break;
        case "flavor":
            result += "口味 Flavor*";
            break;
        case "gender":
            result += "Guest of Honor's Gender";
            break;
        case "guestOfHonor":
            result += "Guest of Honor's Name";
            break;
        case "inscription":
            result += "提字 Inscription";
            break;
        case "lastName" :
            result += "姓 Last Name";
            break;
        case "occasion" :
            result += "場合 Occasion";
            break;
        case "phone" :
            result += "手機 Mobile Number";
            break;
        case "quantity" :
            result += " 數量 Quantity*";
            break;
        case "time" :
            result += "到貨時間 Delivery Time*";
            break;
        default:
            result = "NULL";
    }
    result += '</label>';
    return result;
}

function getPlaceholder(name) {
    var result = "";
    switch (name) {
        case "deliveryAddress":
            result += "Yeh! Cake";
            break;
        case "inscription":
            result += "Happy Birthday James!";
            break;
        case "occasion" :
            result += "生日 Birthday";
            break;
        case "phone" :
            result += "0912345678";
            break;
        default:
            result += "";
    }
    return result;
}

function getTooltip(name) {
    var result = '<a href="#' + name + 'Info" data-rel="popup" data-transition="pop" class="my-tooltip-btn ui-btn ui-alt-icon ui-nodisc-icon ui-btn-inline ui-icon-info ui-btn-icon-notext" title="Info">Info</a>';
    result += '<div data-role="popup" id="' + name + 'Info" class="ui-content" data-theme="a" style="max-width:350px;"><p>';
    switch (name) {
        case "section" : result += "What is the section?"; break;
        case "lane" : result += "What is the lane?"; break;
        case "alley" : result += "What is the alley?"; break;
        case "number" : result += "What is the number?"; break;
        case "floor" : result += "What is the floor or room?"; break;
        case "street" : result += "What is the street?"; break;
        case "postalCode" : result += "What is the city or postal code?"; break;
        case "age" : 
            result += "How old will the guest of honor be turning?";
            break;
        case "budget" : 
            result += "Roughly how much do you wish to spend?  This will help us propose the right type of cake.";
            break;
        case "date" : 
            result += "What date do you want this item delivered?";
            break;
        case "deliveryAddress" : 
            result += "If no address is entered, we assume you will pickup your order at Yeh! Cake.";
            break;
        case "email" : 
            result += "Please enter the orderer's email address in case we have any questions about the order.";
            break;
        case "firstName" : 
            result += "Please enter the orderer's first name.";
            break;
        case "flavor" : 
            result += "What flavor do you want this item?";
            break;
        case "gender" : 
            result += "What is the guest of honor's gender?";
            break;
        case "guestOfHonor":
            result += "What is the guest of honor's name?";
            break;
        case "inscription":
            result += "Do you want any writing on this item?  Please note that the amount of writing may be limited by available real estate.";
            break;
        case "lastName" : 
            result += "Please enter the orderer's last name.";
            break;
        case "phone" :
            result += "Please enter the orderer's phone number in case we have any questions on the day of.";
            break;
        case "occasion" :
            result += "What occasion are you celebrating?";
            break;
        case "quantity" :
            result += "How many of this item do you want?";
            break;
        case "time" :
            result += "What time do you want this item delivered?";
            break;
        default:
            result = "NULL";
    }
    result += '</p></div>';
    return result; 
}

function getUniqueId(prefix) {
    var result = "";
    var now = getNow();
    if (hasValue(prefix)) {
        result = String(prefix).toUpperCase() + ".";       
    } 
    var timeStamp = now.getTime(); 
    var suffix = Math.floor((Math.random() * 100000) + 1);
    result += timeStamp + "." + suffix;
    return result;    
}

function hasValue(variable) {
    if ((variable == undefined) || (variable == null)) {
        return false;
    } else {
        return true;
    }
}

function initApp() {
    //var appId = getAppId();
    //var appCreated = getAppCreated();
    //setNewUser
}

function initAutocomplete(id, options) {
    var option;
    for (var i = 0; i < options.length; i++) {
        option = '<li class="ui-screen-hidden" data-filtertext="' + options[i].filterText + '">' + options[i].text + '</li>';
        $("#" + id).append(option);
    }
    $( "#" + id ).listview( "refresh" );
    $(document).on("click tap", "#" + id + " li", function () {
        var selectedItem = $(this).html();
        $("#" + id).prev("form").find("input").val(selectedItem);
        $("#" + id).children().addClass("ui-screen-hidden");
    });
}

function initForm() {
    
}

function initPage() {
    //initForm;
}

function initSelect(id, options) {
    var option;
    for (var i = 0; i < options.length; i++) {
        option = '<option value="' + options[i].value + '">' + options[i].text + '</option>';
        $("#" + id).append(option);
    }
}

function resetApp() {
    
}

