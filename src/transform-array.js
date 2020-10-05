module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {throw new Error();}
    
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '--double-next' && arr[i] !== '--double-prev' && arr[i] !== '--discard-next' && arr[i] !== '--discard-prev') {
            arrNew.push(arr[i]);
        } else if (arr[i] === '--double-next' && i < arr.length - 1) {
            arrNew.push(arr[i + 1]);
        } else if (arr[i] === '--double-prev' && i > 0 && arr[i-2] !== "--discard-next") {
            arrNew.push(arr[i - 1]);
        } else if (arr[i] === '--discard-next' && i < arr.length - 1) {
          i++;
        } else if (arr[i] === '--discard-prev' && i > 0 && arr[i-2] !== "--discard-next") {
            arrNew.pop(arr[i - 1]);
        }
      }
    
      return arrNew;

};
