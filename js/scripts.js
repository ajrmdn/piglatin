// Back End
function isAVowel(letter) {
  for (var v=0; v<vowels.length;v = v + 1) {
    if (letter === vowels[v]) return true;
  }
  return false;
}

var vowels = ['a', 'e', 'i', 'o', 'u']

function pigLatinWord(word) {
  //return pig;
  if (isAVowel(word[0]) === true)return word + "way"

  for (var i=0; i<word.length;i = i +1) {
    if (isAVowel(word[i]) === true) {
      if (i > 0 && word[i] === "u" && word[i - 1] === "q") {
        //       "ire"            + "squ" + "ay"
        return word.slice(i + 1) + word.slice(0, i + 1) + "ay"
      } else {
        return word.slice(i) + word.slice(0, i) + "ay"
        }
      }
    }
    return word;
  }
function pigLatinTheWords (phrase) {
  phrase = phrase.toLowerCase();
  var words = phrase.split(" ");
  var pigLatin = "";
  words.forEach (function (word) {
    pigLatin += pigLatinWord(word);
    pigLatin += " ";
  });
  var returnphrase = pigLatin[0].toUpperCase() + pigLatin.slice(1)
  return returnphrase;
}

// Front End
$(document).ready(function() {
  $("#pigInput").submit(function(event) {
    event.preventDefault();
    var pig = ($("#userInput").val());

    $("h1#result").text(pigLatinTheWords($("#userInput").val()));
  });
});


// console.log(#pigLAtinInput);
