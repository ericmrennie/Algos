/*
Given the square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically ascending.
Determine if the columns are also in ascending alphabetical order, top to bottom.
Return YES if they are or NO if they are not.
*/

// const gridChallenge = (grid) => {
//     const chunkSize = 1;
//     const sortedGrid = [];
//     for (let i = 0; i < grid.length; i+= chunkSize) {
//         let chunk = grid.slice(i, i + chunkSize);
//         chunk[0] = chunk[0].split('').sort().join('');
//         sortedGrid.push(chunk);
//     }
//     console.log(sortedGrid);
//     let result = 'YES';
//     for (let i = 0; i < sortedGrid.length; i++) {
//         for (let j = 0; j < sortedGrid.length; j++) {
//             let element1 = sortedGrid[j][i];
//             let element2 = (j + 1 < sortedGrid.length) ? sortedGrid[j + 1][i] : '';
            
//             if (element1.localeCompare(element2) > 0) {
//                 result = 'NO';
//                 break; // Exit the inner loop early if the order is not ascending
//             }
//         }
//         if (result === 'NO') break;
//     }
//     return result;
// }

function gridChallenge(grid) {
    // Step 1: Convert each row to an array of characters and sort them
    grid = grid.map(row => row.split('').sort());

    // Step 2: Check if columns are in ascending alphabetical order
    const numRows = grid.length;
    const numCols = grid[0].length;

    for (let col = 0; col < numCols; col++) {
        for (let row = 1; row < numRows; row++) {
            // Compare characters in the column from top to bottom
            if (grid[row][col] < grid[row - 1][col]) {
                return "NO";  // Columns are not in ascending order
            }
        }
    }

    // If all columns are in ascending order
    return "YES";
}

console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));