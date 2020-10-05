module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber)-1;
    let sec = Math.floor(turns / (turnsSpeed / 3600));

    let obj = {
        "turns": turns,
        "seconds": sec
    }


return obj;
}
