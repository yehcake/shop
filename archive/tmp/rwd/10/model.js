function getNewAppId() {
  var result = getNewId(null, true);
  return result;
}

function getNewId(prefix, hasSuffix) {
  var result = "";
  var now = getNow();
  if (hasValue(prefix)) {
    result = String(prefix).toUpperCase();       
  } 
  var timeStamp = now.getTime(); 
  result += timeStamp;
  if (hasSuffix) {
    var suffix = getRandomNum(1000000);
    result += "." + suffix;
  }
  return result;    
}

function getNewItemId(sessionId) {
  var result = sessionId + "_" + getNewId(null, false);
  return result;
}

function getNewSessionId(appId) {
  var result = appId + "_" + getNewId(null, false);
  return result;
}