module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {throw new Error();}
    
    let arrNew = [];
    for (let i = 0; i<arr.length; i++) {
        if (arr[i] == "--discard-next") {
            i+=1;
        } else if (arr[i] == "--discard-prev") {
            if (i>0) {arrNew.pop();}
        } else if (arr[i] == "--double-next") {
            if (i<arr.length-1) {arrNew.push(arr[i+1]);}
        } else if (arr[i] == "--double-prev") {
            if (i>0) {arrNew.push(arr[i-1]);}
        } else {arrNew.push(arr[i]);}
        
    }

    return arrNew;

};
