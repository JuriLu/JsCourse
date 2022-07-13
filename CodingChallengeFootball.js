'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//  1.Create arrays for both team players
const [players1, players2] = game.players;
console.log(players1,players2);

//  2.Separate the gk from other players
const [gk,...fieldPlayers] = players1
console.log(gk,fieldPlayers)

//  3.Create an array with all the players
const allPlayers = [...players1,...players2]
console.log(allPlayers);

// 4. Subsitutes, An Array with all the original players + the 3 subsitutes
const players1Final = [...players1 , 'Thiago','Coutinoh','Perisic'];
console.log(players1Final);

// 5. Create a Variable for each odd

const {team1,x:draw,team2} = game.odds
console.log(team1,draw,team2)

// 6. Print Goals Function
const printGoals = function (...players){
    console.log(`${players.length} goals were scored`)
}

// 7.Prediction based on odds
team1 < team2  && console.log('Team 1 is more likely to win')
team2 < team1  && console.log('Team 2 is more likely to win')

// printGoals('Davies','Muller','Lewandowski','Kimmich')
printGoals(...game.scored)
// printGoals('Davies','Muller')
