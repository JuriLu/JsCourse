'use strict';
console.log('Test TEst 1 2 3 4 ...')

const game = {
    team1: 'Bayern Munich',
    team2: 'Borussia Dortmund',
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

//Ex 1
for (const [i,player] of game.scored.entries()){
    console.log(`"Goal ${i+1}: ${player}"`)
}

//Ex 2
const odds = Object.values(game.odds)
let average = 0;

//That's how you iterate through the elements of an object
for (const odd of odds) average += odd;
    average /= odds.length;
console.log(average);

//Ex3
for (const [team,odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of victory ${teamStr}: ${odd}`);
}
