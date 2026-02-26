function addPerformanceScore(player) {

    let total = player.goals + player.assists;

    let performance = total / player.matchesPlayed;

    performance = Number(performance.toFixed(2));

    player.performancePerMatch = performance;

    if (performance >= 1.0) {
        player.isKeyPlayer = true;
    } else {
        player.isKeyPlayer = false;
    }

    console.log(player);
}