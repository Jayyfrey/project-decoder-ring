
const polybiusModule = (function () {
  function generatePolybiusCipher(encode = true){
    const polybiusCipher = {
      "a":"11", "b":"21", "c":"31", "d":    "41", "e":"51",
      "f":"12", "g":"22", "h":"32", "(i/j)":"42", "k":"52",
      "l":"13", "m":"23", "n":"33", "o":    "43", "p":"53",
      "q":"14", "r":"24", "s":"34", "t":    "44", "u":"54",
      "v":"15", "w":"25", "x":"35", "y":    "45", "z":"55"
    }    
    if(encode === true){ 
      return polybiusCipher;
    } else { 
      for(const key in polybiusCipher){
        polybiusCipher[polybiusCipher[key]] = key;
      }
      return polybiusCipher;
    }
  } 

  function polybius(input, encode = true) {
    if(encode===false && input.replace(" ","").length%2>0) return false;
    input = input.toLowerCase();
    const polybiusCipher = generatePolybiusCipher(encode);
    const codeMessage = [];
    const encodeFlag = ((encode === true) ? 1 : 2);
    for (let i = 0; i < input.length; i+=encodeFlag){
      const searchItem = input.slice(i,i+encodeFlag); 
      if(input[i]==" "){
        codeMessage.push(input[i]); 
        i = i + (1-encodeFlag); 
      } else if (polybiusCipher[searchItem]){
        codeMessage.push(polybiusCipher[searchItem]);
      } else { 
        const cipherGroups = Object.keys(polybiusCipher);
        const foundKey = cipherGroups.find((key) => key.includes(searchItem));
        codeMessage.push(polybiusCipher[foundKey]);
      }
    }
    return codeMessage.join("").toString();
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;