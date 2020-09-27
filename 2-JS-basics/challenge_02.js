// Challenge 02
var johnTeam, mikeTeam;

johnTeam = average(89, 120, 103);
mikeTeam = average(116, 94, 123);

if(johnTeam > mikeTeam) {
  console.log(`The john team wins with ${johnTeam}`);
} else {
  console.log(`The mike team wins with ${mikeTeam}`);
}

function average(game1, game2, game3) {
  return (game1 + game2 + game3) / 3
}