function getCond(test, exp1, exp2)
{
    var result = exp2;
    if (test)
    {
        result = exp1;
    }
    return result;
}

function getError(code)
{
    var result;
    return getCond(isEmpty(code), null, result);
}

function getPref(key, config)
{
    return getCond(isEmpty(config[key]), getError(), config[key]);
}

function getLabel(key, dict, lang)
{
    var result = getCond(isEmpty(lang), dict[getPref(lang)][key].label, dict[lang][key].label);
    return getCond(!isEmpty(result), getError(), result);
}

function isEmpty(val)
{
    return ((val !== undefined) && (val !== null) && (val !== ""));
}

function isNumeric(val)
{
    return jQuery.isNumeric(val);
}

function isOne(val)
{
    return ((isNumeric(val)) && (val === 1));
}