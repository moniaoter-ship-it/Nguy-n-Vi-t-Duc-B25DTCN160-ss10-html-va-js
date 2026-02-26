function analyzeSalary(minYears, teamPlayers) {

  let filtered = teamPlayers.filter(function(player) {
    return player.years >= minYears;
  });

  if (filtered.length === 0) {
    return {
      totalSalary: 0,
      highestPaid: null,
      lowestPaid: null
    };
  }

  let totalSalary = filtered.reduce(function(total, player) {
    return total + player.salary;
  }, 0);

  let highestPaid = filtered.reduce(function(max, player) {
    if (player.salary > max.salary) {
      return player;
    } else {
      return max;
    }
  });

  let lowestPaid = filtered.reduce(function(min, player) {
    if (player.salary < min.salary) {
      return player;
    } else {
      return min;
    }
  });

  return {
    totalSalary: totalSalary,
    highestPaid: highestPaid,
    lowestPaid: lowestPaid
  };
}