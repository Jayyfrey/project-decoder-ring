
const caesarModule = (function () {
  function caesar(input, shift = 0, encode = true) { 
    input = input.toLowerCase();
    if (shift === 0 || shift > 25 || shift < -25) return false; 
    const encodedMessage = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    const searchArray = [...alphabet,...alphabet,...alphabet]; //"a" or "z" can now safely shift in either direction
    shift = (encode === true) ? shift : shift*(-1); // (shift* -1) for decoding

    for(letter of input){ 
      const letterPosition = alphabet.indexOf(letter);
      if (!alphabet.includes(letter)){ // this will push spaces and other symbols
        encodedMessage.push(letter);
      } else {
        encodedMessage.push(searchArray[letterPosition + 26 + shift]);
      }
    }
    return encodedMessage.join("");
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;