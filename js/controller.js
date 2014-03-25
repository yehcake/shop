// GET FUNCTIONS BELOW

function getFormData(supplementalData)
{
    var result = {};
    $(getSelector("formFields",getPageId())).each(function(index, element) {
        if ($(element).val().trim() != "") {
            result[element.name] = $(element).val().trim();    
        } 
    });
    if (hasValue(supplementalData))
    {
        $.each(supplementalData, function (key, value)
        {
            result.append(key, value);
        });
    }
    return result;
}

function getPageId() 
{
    return $(':mobile-pagecontainer').pagecontainer('getActivePage')[0].id;
}

function getSelector(name, page) 
{
    var result = "";
    if (hasValue(page)) 
    {
        result = "#" + page + " ";
    }
    result += getDictValue(name, getSelectorDict());
    return result;
}

function goTo(url) 
{
    $(":mobile-pagecontainer").pagecontainer("change", url);
}

// INIT FUNCTIONS BELOW

function initApp() 
{
    if (!hasAppId()) 
    {
        resetApp();
    }
    // do other stuff here
}

function initSession() 
{
    if (!hasSessionId()) 
    {
        resetSession();
        logSession();
    }
}

// IS FUNCTIONS BELOW

function isAccountComplete() 
{
    if (getFirstName() && getLastName() && getEmail() && getPhone()) 
    {
        return true;
    } 
    else 
    {
        return false;
    }
}

function isFormComplete() 
{
    var result = true;
    $(getSelector("requiredFields",getPageId())).each(function (index, element)
    {
        if ($(element).val().trim() == "")
        {
            result = false;
        }
    });
    return result;
}

// SUBMIT FUNCTIONS BELOW

function submit() 
{
    if (isFormComplete()) 
    {
        initSession();
        var formData = getFormData();
        switch (getPageId()) 
        {
            case "accountPage":
                setEmail($("#email").val());
                setFirstName($("#firstName").val());
                setLastName($("#lastName").val());
                setPhone($("#phone").val());
                uploadAccount(formData);
                break;
            default:
                setLineItemDefaults(formData);
                uploadLineItem(formData);
        }
    }
    else 
    {
        notify("請您務必填寫以下所有標示*欄位。Please fill in all fields marked with an asterisk.");
    }
}