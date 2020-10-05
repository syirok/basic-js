const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.getlength){
      this.arr = [];
      throw new Error;}
    this.arr.splice(position - 1, 1);
    return this;

  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.map(el => '( ' + el + ' )').join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
