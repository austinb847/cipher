var firstLastLetterCaps = function(userSentence) {
  var firstLetterCaps, lastLetterCaps, newString;

  firstLetterCaps = userSentence.charAt(0).toUpperCase();
  lastLetterCaps = userSentence.charAt(userSentence.length - 1).toUpperCase();

  newString = firstLetterCaps + lastLetterCaps;

  return newString;
}

var userSentence = prompt("Enter a sentence:");
console.log(userSentence);

var b = firstLastLetterCaps(userSentence);
alert(b);