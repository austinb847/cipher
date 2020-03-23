var firstLastLetterCaps = function(userSentence) {
  var firstLetterCaps, lastLetterCaps, newString;

  firstLetterCaps = userSentence.charAt(0).toUpperCase();
  lastLetterCaps = userSentence.charAt(userSentence.length - 1).toUpperCase();

  newString = firstLetterCaps + lastLetterCaps;

  return newString;
}

var reverseString = function(newString) {
  var array, revStr;

  array = newString.split("");
  array.reverse();

  revStr = array.join("");

  return revStr;
}

var callFunctions = function(userSentence) {
  var letters, revStr;

  letters = firstLastLetterCaps(userSentence);
  revStr = reverseString(letters);

  alert(revStr);
  return revStr;
  
}

var userSentence = prompt("Enter a sentence:");
callFunctions(userSentence);

