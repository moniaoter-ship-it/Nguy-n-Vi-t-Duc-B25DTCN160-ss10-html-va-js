function getFilteredTotalGoals(minGoals, teamPlayers) {

    let filteredPlayers = teamPlayers.filter(function(player) {
        return player.goals >= minGoals;
    });

    let totalGoals = filteredPlayers.reduce(function(total, player) {
        return total + player.goals;
    }, 0);

    return totalGoals;
}