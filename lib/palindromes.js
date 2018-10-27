function isPalindrome(s) {
  var x = s.split(" ").join("");
  var stringReverse = x.split("").reverse().join("");
  return x == stringReverse;
// return if the entered string equals the reverse string
}

module.exports = isPalindrome;
