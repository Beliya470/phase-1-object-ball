// src/00-objectball.js
function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                // the rest of the players...
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                // the rest of the players...
            }
        }
    };
}

function findPlayer(playerName) {
    let game = gameObject();
    for (let location in game) {
        for (let player in game[location].players) {
            if (player === playerName) {
                return game[location].players[player];
            }
        }
    }
}

function numPointsScored(playerName) {
    return findPlayer(playerName).points;
}

function shoeSize(playerName) {
    return findPlayer(playerName).shoe;
}

function teamColors(teamName) {
    let game = gameObject();
    for (let location in game) {
        if (game[location].teamName === teamName) {
            return game[location].colors;
        }
    }
}

function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    let game = gameObject();
    for (let location in game) {
        if (game[location].teamName === teamName) {
            return Object.values(game[location].players).map(player => player.number);
        }
    }
}

function playerStats(playerName) {
    return findPlayer(playerName);
}
console.log(gameObject());
console.log(numPointsScored("Alan Anderson"));
console.log(shoeSize("Alan Anderson"));
console.log(teamColors("Brooklyn Nets"));
console.log(teamNames());
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerStats("Alan Anderson"));
