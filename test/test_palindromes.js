var assert = require("chai").assert;
var isPalindrome = require("../lib/palindromes");

describe("Palindromes", function() {
  it("should return true if a word is a palindrome", function() {
    var word = "abba"; // word to test
    var result = isPalindrome(word); // result runs the test
    assert.isTrue(result); // tests for quality
  });

  it("should return false if a word is NOT a palindrome", function() {
    var word = "not";
    assert.isFalse(isPalindrome(word));
  });

  it("should return true if a phrase is a palindrome", function() {
    var phrase = "a man a plan a canal panama";
    assert.isTrue(isPalindrome(phrase));
  });

  it("should return false if a phrase is NOT a palindrome", function() {
    var phrase = "this is not a palindrome"
    assert.isFalse(isPalindrome(phrase));
  });
});

