// Challenge 03

var rest01, rest02, rest03, tips, final;

tips = [];
final = [];
rest01 = 124;
rest02 = 48;
rest03 = 268;

var tip_calculator = function(bill) {
  console.log("teste" + bill);
  if(bill < 50) {
    return bill * 0.2;
  } else if(50 < bill && bill < 200) {
    return bill * 0.15;
  } else {
    return bill * 0.1
  }
}
      
tips.push(tip_calculator(48))
tips.push(tip_calculator(124))
tips.push(tip_calculator(268))

console.log(tips)





