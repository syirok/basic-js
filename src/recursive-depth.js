const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        
        if (arr.every(elem => !Array.isArray(elem))) {return 1;}
        else {return 1 + this.calculateDepth(arr.flat());}
        
    }
};