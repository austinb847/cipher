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

var concatLetter = function(userSentence) {
  var sentenceLength, getIndx, letterIndx, newSentence;

  sentenceLength = userSentence.length;
  getIndx = sentenceLength / 2;

  letterIndx = userSentence.charAt(getIndx);

  newSentence = letterIndx + userSentence;
  alert(newSentence);
  return newSentence;
}

var callFunctions = function(userSentence) {
  var letters, revStr, finalsStr;

  letters = firstLastLetterCaps(userSentence);
  revStr = reverseString(letters);

  finalsStr = userSentence + revStr;
  alert(finalsStr);
  return finalsStr;
  
}

var userSentence = prompt("Enter a sentence:");
callFunctions(userSentence);



