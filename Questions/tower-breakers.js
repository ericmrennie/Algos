/*
Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.
The rules of the game are as follows:
Initially there are n towers.
Each tower is of m height .
The players move in alternating turns.
In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y <= x and y evenly divides x.
If the current player is unable to make a move, they lose the game.
Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.
*/

const towerBreakers= (n, m) => {
    let stopCode = 0;
    const towers = [];
    let turns = 0;
    for (let i = 0; i < n; i++) {
        towers.push(m);
    }
    while (stopCode < towers.length) {
        for (let i = 0; i < towers.length; i++) {
            if (towers[i] % 2 === 0 && towers[i] >= 1) {
                towers[i] = (towers[i]/2)
                turns++;
                console.log(towers);
            } else {
                stopCode++;
            }
        }
    }
    if (turns % 2 === 1) return 1;
    if (turns % 2 === 0) return 2;
}

console.log(towerBreakers(2,2));