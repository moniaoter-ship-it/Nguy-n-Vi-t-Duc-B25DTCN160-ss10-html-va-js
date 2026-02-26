function generateRankingReport(minMatches, players) {

  let filtered = players.filter(function(p) {
    return p.matches >= minMatches;
  });

  let enhanced = filtered.map(function(p, index) {

    let performance = (p.goals + p.assists) / p.matches;
    performance = Number(performance.toFixed(2));

    let efficiency = performance - (p.yellowCards / p.matches) * 10;
    efficiency = Number(efficiency.toFixed(2));

    return {
      ...p,
      performanceScore: performance,
      efficiencyScore: efficiency,
      originalIndex: index   
    };
  });

  let ranking = enhanced.sort(function(a, b) {

    if (b.efficiencyScore !== a.efficiencyScore) {
      return b.efficiencyScore - a.efficiencyScore;
    }

    if (b.performanceScore !== a.performanceScore) {
      return b.performanceScore - a.performanceScore;
    }

    if (b.goals !== a.goals) {
      return b.goals - a.goals;
    }

    return a.originalIndex - b.originalIndex;
  });

  console.log("XẾP HẠNG ĐỘI BÓNG (từ " + minMatches + " trận trở lên)\n");

  ranking.forEach(function(p, index) {
    console.log(
      (index + 1) + ". " + p.name +
      " - Efficiency: " + p.efficiencyScore +
      " | Performance: " + p.performanceScore +
      " | Goals: " + p.goals
    );
  });

  console.log("\nTổng số cầu thủ xếp hạng: " + ranking.length);

  if (ranking.length > 0) {
    console.log("Cầu thủ xuất sắc nhất: " + ranking[0].name);
  } else {
    console.log("Cầu thủ xuất sắc nhất: Không có");
  }

  let avgEfficiency = 0;

  if (ranking.length > 0) {
    let totalEfficiency = ranking.reduce(function(sum, p) {
      return sum + p.efficiencyScore;
    }, 0);

    avgEfficiency = totalEfficiency / ranking.length;
    avgEfficiency = Number(avgEfficiency.toFixed(2));
  }

  console.log("Trung bình efficiency top " + ranking.length + ": " + avgEfficiency);
}