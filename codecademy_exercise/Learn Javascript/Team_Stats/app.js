const team = {
    _players: [
        {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 11
        }
    ],
    _games: [
        {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
        }
    ],
    get players() {
        return this._players
    },
    get games() {
        return this._games
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        }
        this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        }
    this._games.push(game);
    }
}

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
team.addGame('David Beckham', 3, 1);
team.addGame('Lionel Messi', 3, 1);
team.addGame('Cristiano Ronaldo', 3, 1);
console.log(team.games);