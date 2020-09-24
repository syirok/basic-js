module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {return false;}

 let team = "";

 for (let i in members) {
   if (typeof members[i] == "string") {
     members[i] = members[i].split(' ').join('');
     team += members[i][0];
   }
 }

 return team.toUpperCase().split('').sort().join('');

};
