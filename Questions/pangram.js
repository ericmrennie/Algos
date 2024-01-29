/*
A pangram is a string that contains every letter of the alphabet. 
Given a sentence determine whether it is a pangram in the English alphabet. 
Ignore case. Return either pangram or not pangram as appropriate.
*/

const pangrams = (s) => {
    // create an alphabet store
    const store = {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
        h: false,
        i: false,
        j: false,
        k: false,
        l: false,
        m: false,
        n: false,
        o: false,
        p: false,
        q: false,
        r: false,
        s: false,
        t: false,
        u: false,
        v: false,
        w: false,
        x: false,
        y: false,
        z: false
    }
    // convert the input string to lowercase and store it
    const string = s.toLowerCase();
    // iterate through the stored string
    for (let i = 0; i < string.length; i++) {
        // when we come across each letter, turn its value in the store to true
        store[string[i]] = true;
    }
    // if object.values does not contain false, return pangram
    if (Object.values(store).every((value) => value === true)) {
        return 'pangram';
    } else {
    // else return not pangram
        return 'not pangram'
    }
}

console.log(pangram("The quick brown fox jumps over the lazy dog"));