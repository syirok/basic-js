module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false;}

 let team = "";

 /*for (let i in members) {
   if (typeof members[i] == "string") {
     members[i] = members[i].trim();
     team += members[i][0];
   }
 }*/

 team = members
  .filter(el => typeof el == "string")
  .map(el => el.trim()[0])
  .join('');

 return team.toUpperCase().split('').sort().join('');

};
