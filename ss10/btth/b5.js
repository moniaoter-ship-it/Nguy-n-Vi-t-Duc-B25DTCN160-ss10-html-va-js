function generatePlayerSeasonReport(playerName, teamHistory) {

    let player = teamHistory.find(function(p) {
    return p.name === playerName;
  });

  if (!player) {
    return "Không tìm thấy cầu thủ " + playerName;
  }

  let seasonsArray = Object.entries(player.seasons);

  let totals = seasonsArray.reduce(function(acc, item) {
    let seasonData = item[1];

    acc.totalMatches += seasonData.matches;
    acc.totalGoals += seasonData.goals;
    acc.totalAssists += seasonData.assists;
    acc.totalYellowCards += seasonData.yellowCards;

    return acc;
  }, {
    totalMatches: 0,
    totalGoals: 0,
    totalAssists: 0,
    totalYellowCards: 0
  });

  let avgGoals = (totals.totalGoals / totals.totalMatches).toFixed(2);
  let avgAssists = (totals.totalAssists / totals.totalMatches).toFixed(2);

  let best = seasonsArray.reduce(function(bestSoFar, current) {
    let seasonName = current[0];
    let data = current[1];

    if (!bestSoFar) {
      return {
        season: seasonName,
        goals: data.goals,
        assists: data.assists
      };
    }

    if (
      data.goals > bestSoFar.goals ||
      (data.goals === bestSoFar.goals && data.assists > bestSoFar.assists)
    ) {
      return {
        season: seasonName,
        goals: data.goals,
        assists: data.assists
      };
    }

    return bestSoFar;
  }, null);

  let report = {
    name: player.name,
    position: player.position,
    nationality: player.nationality,
    careerStats: {
      totalMatches: totals.totalMatches,
      totalGoals: totals.totalGoals,
      totalAssists: totals.totalAssists,
      totalYellowCards: totals.totalYellowCards,
      averageGoalsPerMatch: Number(avgGoals),
      averageAssistsPerMatch: Number(avgAssists),
      bestSeason: best
    }
  };

  console.log(report);
  return report;
}