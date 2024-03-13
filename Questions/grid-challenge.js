/*
Given the square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically ascending.
Determine if the columns are also in ascending alphabetical order, top to bottom.
Return YES if they are or NO if they are not.
*/

const gridChallenge = (grid) => {
    const chunkSize = 1;
    const sortedGrid = [];
    for (let i = 0; i < grid.length; i+= chunkSize) {
        const chunk = grid.slice(i, i + chunkSize);
        sortedGrid.push(chunk);
    }
    console.log(sortedGrid);
}

console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));