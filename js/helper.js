function getDictValue(key, dict) 
{
    if (hasValue(dict[key])) 
    {
        return dict[key];
    }
    else
    {
        return null;
    }
}

function getFutureDate(days) {
  var now = getNow();
  var millisecondsInDay = 24 * 60 * 60 * 1000;
  var result = new Date(now.getTime() + (days * millisecondsInDay));
  return result;
}

function getNow() {
  var result = new Date();
  return result;
}

function getRandomNum(max) {
  var result = Math.floor((Math.random() * max) + 1);
  return result;
}

function hasValue(obj) {
  if ((obj == undefined) || (obj == null)) {
    return false;
  } else {
    return true;
  }
}

function initValue(obj) 
{
    if (hasValue(obj)) 
    {
        return obj;
    }
    else 
    {
        return null;
    }
}

function isEmpty(str) 
{
    if (hasValue(str))
    {
        if (str.length > 0)
        {
            return false;
        }
    }
    return true;
}

function isOdd(num) 
{ 
    return num % 2;
}

function isValid(value, type) 
{
    var regExp;
    var result;
    if (hasValue(value)) 
    {
        switch (type) 
        {
            case "email":
                regExp = /^\S+@\S+\.\S+$/;
                break;
            case "mobile":
                regExp = /^(0|\+886)9[0-9]{8}/;
                break;
            case "number":
                regExp = /\d+/;
                break;
            case "phone":
                regExp = /^(0|\+886)[0-9]{9}/;
                break;
            default:
                regExp = /\S+/;
        }
        return regExp.test(value);
    } 
    else 
    {
        return false;
    }
}

function isValidInput(value, type, isRequired) 
{
    var result = false;
    if (hasValue(value))
    {
        if (value.length > 0)
        {
            result = isValid(value, type);
        }
        else if (!isRequired)
        {
            result = true;
        }
    }
    return result;
}

function spliceArrays(arr1, arr2) 
{
    var longerLength = arr2.length;
    var result = [];
    if (arr1.length > arr2.length) 
    {
        longerLength = arr1.length;
    }
    for (var i = 0; i < longerLength; i++) 
    {
        if (i < arr1.length) 
        {
            result.push(arr1[i]);
        }
        if (i < arr2.length) 
        {
            result.push(arr2[i]);
        }
    }
    return result;
}