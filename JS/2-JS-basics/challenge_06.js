// Challenge 06
bills = [124, 48, 268, 180, 42]

for (var i = 0; i < bills.length; i++) {
  if (bills[i] < 50) {
    bills[i] += bills[i] * 0.2
  } else if (bills[i] >= 50 && bills[i] < 200) {
    bills[i] += bills[i] * 0.15
  } else {
    bills[i] += bills[i] * 0.1
  }
}

console.log(bills)