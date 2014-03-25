function getError(name) {
    var result = '<div class="ui-helper-hidden ui-state-error ui-state-error-text">';
    switch (name) {
        default:
            result += "這裡必須填入資料。Valid data is required here.";
    }
    result += '</div>';
    return result;
}

function getLabel(name) {
    var result = '<label for="' + name + '">';
    switch (name) {
        case "age":
            result += "Guest of Honor's Age";
            break;
        case "budget":
            result += "Target Budget";
            break;
        case "date":
            result += "Delivery Date";
            break;
        case "deliveryAddress":
            result += "Delivery Address";
            break;
        case "email":
            result += "Email";
            break;
        case "firstName" :
            result += "First Name";
            break;
        case "flavor":
            result += "Flavor";
            break;
        case "gender":
            result += "Guest of Honor's Gender";
            break;
        case "guestOfHonor":
            result += "Guest of Honor's Name";
            break;
        case "inscription":
            result += "Inscription";
            break;
        case "lastName" :
            result += "Last Name";
            break;
        case "occasion" :
            result += "Occasion Being Celebrated";
            break;
        case "phone" :
            result += "Mobile Number";
            break;
        case "quantity" :
            result += " 數量 Quantity";
            break;
        case "time" :
            result += " Delivery Time";
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
            result += "Happy 1st Birthday!";
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
        case "age" : 
            result += "How old will the guest of honor be turning?";
            break;
        case "budget" : 
            result += "How much do you wish to spend?";
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

function getFormFieldSelect(name) {
    var result = getLabel(name);
    result += '<select name="' + name + '" id="' + name + '" data-mini="true"><option data-placeholder="true" value="">未指定 Not Specified</option></select>';
    return result;
}

function getFormFieldText(name) {
    var result = getLabel(name);
    result += '<input type="text" name="' + name + '" id="' + name + '" data-mini="true" data-clear-btn="true" value="" placeholder="' + getPlaceholder(name) + '">';
    return result;
}

function getFormField(name) {
    var result = '<div class="ui-grid-b yc-form-field"><div class="ui-block-a">';
    var selectField = getFormFieldSelect(name) + '</div><div class="ui-block-b">' + getTooltip(name) + '</div><div class="ui-block-c">' + getError(name);
    var textField = getFormFieldText(name) + '</div><div class="ui-block-b">' + getTooltip(name) + '</div><div class="ui-block-c">' + getError(name);
    switch (name) {
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

function initSelect(id, options) {
    var option;
    for (var i = 0; i < options.length; i++) {
        option = '<option value="' + options[i] + '">' + options[i] + '</option>';
        $("#" + id).append(option);
    }
}

function getTimes() {
    var result = ["9:00",
        "9:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
        "18:00"];
    return result;
}
