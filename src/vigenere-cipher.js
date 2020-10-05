const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (type = true) {
    this.isDirect = type;
    this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  }


  encrypt(str, key) {
    if (!str || !key) throw new Error;
    str = str.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let i = 0;
    let j = 0;
    let shift;

    for (i = 0; i < str.length; i++) {
      if (this.abc.indexOf(str[i]) == -1) {
        result += str[i];

      } else {
      shift = (this.abc.indexOf(str[i]) + this.abc.indexOf(key[j])) % 26;
      result += this.abc[shift];
      j++;
      j = j == key.length ? 0 : j; 
      }

    }

    return this.isDirect ? result : result.split('').reverse().join('');


  }  

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error;
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let i = 0;
    let j = 0;
    let shift;

    for (i = 0; i < encryptedMessage.length; i++) {
      if (this.abc.indexOf(encryptedMessage[i]) == -1) {
        result += encryptedMessage[i];

      } else {
      shift = (this.abc.indexOf(encryptedMessage[i]) + 26 - this.abc.indexOf(key[j])) % 26;
      result += this.abc[shift];
      j++;
      j = j == key.length ? 0 : j; 
      }


    }

    return this.isDirect ? result : result.split('').reverse().join('');


  }
}

module.exports = VigenereCipheringMachine;
