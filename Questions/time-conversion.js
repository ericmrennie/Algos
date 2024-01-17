/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
string s: a time in  hour format

Returns
string: the time in  hour format

Input Format
A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints
All input times are valid

Sample Input
07:05:45PM

Sample Output
19:05:45
*/

function timeConversion(s) {
    // create an hour variable
    let hour = s.slice(0,2);
    // create a minutes variable
    let minutes = s.slice(3,6);
    // create a seconds variable
    let seconds = s.slice(6,8);
    // if it says PM, then set the hours variable to 12 plus the hour
    if (s[8] === 'P' && hour !== '12') {
        hour = +hour + 12;
    } else if (s[8] === 'A' && hour === '12'){
        hour = '00';
    }
    // return hour:minutes:seconds
    return hour + ':' + minutes + seconds;
}

console.log(timeConversion('07:05:45PM'));