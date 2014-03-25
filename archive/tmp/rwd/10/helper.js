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