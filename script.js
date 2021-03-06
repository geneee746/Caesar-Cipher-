/*
JavaScript Caesar shift
by Evan Hahn (evanhahn.com)
"Encrypt" like this:
    caesarShift('Attack at dawn!', 12);    // Returns "Mffmow mf pmiz!"
And "decrypt" like this:
    caesarShift('Mffmow mf pmiz!', -12);    // Returns "Attack at dawn!"
For simplicity, only works with ASCII characters.
* * * * * * * * * * * *
This is free and unencumbered software released into the public domain.
Anyone is free to copy, modify, publish, use, compile, sell, or distribute
this software, either in source code form or as a compiled binary, for any
purpose, commercial or non-commercial, and by any means.
In jurisdictions that recognize copyright laws, the author or authors of this
software dedicate any and all copyright interest in the software to the public
domain. We make this dedication for the benefit of the public at large and to
the detriment of our heirs and successors. We intend this dedication to be an
overt act of relinquishment in perpetuity of all present and future rights to
this software under copyright law.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
For more information, please refer to <https://unlicense.org/>
*/

var caesarShift = function (str, amount) {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

  // All done!
  return output;
};

function encode(){
	let text = document.getElementById("plaintext").value;
	let shift = parseInt(document.getElementById("shift").value);
	console.log(caesarShift(text, shift));
	
	document.getElementById("encoded").innerHTML = caesarShift(text, shift);
}

function decode(){
	let text = document.getElementById("ciphertext").value;
	let shift = -1 * parseInt(document.getElementById("unshift").value);
	console.log(caesarShift(text, shift));
	
	document.getElementById("decoded").innerHTML = caesarShift(text, shift);
}