/*
There is a collection of input strings and a collection of query strings. 
For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results.

Function Description
Complete the function matchingStrings in the editor below. The function must return an array of integers 
representing the frequency of occurrence of each query string in strings.

matchingStrings has the following parameters:
string strings[n] - an array of strings to search
string queries[q] - an array of query strings

Returns
int[q]: an array of results for each query
*/

function matchingStrings(strings, queries, results = []) {
    // declare an empty results array
    // const results = [];
    // slice the queries array at the 0th index and store it in a variable
    // let query = queries.slice(0);
    // iterate through the strings array
    if (queries.length === 0) return results;
    // declare a counter
    let counter = 0;
    for (let i = 0; i < strings.length; i++) {
        // if the stored queries value matches the string value, incremenent the counter   
        if (strings[i] === queries[0]) counter += 1;
    }
    // push the counter value into the empty array
    results.push(counter);
    // return counter to 0
    // counter = 0;
    // if queries.length is 0, return results
    return matchingStrings(strings, queries.slice(1), results);
}

console.log(matchingStrings(['ab','ab','abc'], ['ab','abc','bc']));