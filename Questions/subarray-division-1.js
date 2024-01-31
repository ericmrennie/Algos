/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:
-The length of the segment matches Ron's birth month, and,
-The sum of the integers on the squares is equal to his birth day.

Determine how many ways she can divide the chocolate.
*/

const birthday = (s, d, m) => {
    let counter = 0;

    for (let i = 0; i <= s.length - m; i++) {
        let segmentSum = 0;

        for (let j = 0; j < m; j++) {
            segmentSum += s[i + j];
        }

        if (segmentSum === d) {
            counter++;
        }
    }
    return counter;
}

//test
const chocolate = [2,2,1,3,2];
const day = 4;
const month = 2;

console.log(birthday(chocolate, day, month));