module.exports = function repeater(str, options) {

str = String(str);

let result = "";

if (!options.repeatTimes) {options.repeatTimes = 1;}
if (!options.separator) {options.separator = '+';}
if (options.hasOwnProperty("addition")) {options.addition = String(options.addition);}
    else {options.addition = "";}
if (!options.additionRepeatTimes) {options.additionRepeatTimes = 1;}
if (!options.additionSeparator) {options.additionSeparator = '|';}

for (let i = 1; i <= options.repeatTimes; i++) {
    result += str;
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
        result += options.addition;
        if (j < options.additionRepeatTimes) {
            result += options.additionSeparator;
        }
    }
    if (i<options.repeatTimes) {
        result += options.separator;
    }
}
return result;
}
  