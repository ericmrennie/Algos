/*
Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. 
If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.
*/

const caesarCipher = (s, k) => {
    // Create an alphabet store
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // Declare an empty string for the output
    let output = '';
    // Iterate through the input string 
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let index;
        if (alphabet.includes(char)) {
            // Find the index in the lowercase alphabet
            index = (alphabet.indexOf(char) + k) % 26;
            // Preserve the case
            output += alphabet[index];
        } else if (ALPHABET.includes(char)) {
            // Find the index in the uppercase alphabet
            index = (ALPHABET.indexOf(char) + k) % 26;
            // Preserve the case
            output += ALPHABET[index];
        } else {
            // If it's not an alphabetic character, keep it unchanged
            output += char;
        }
    }
    // Return output
    return output;
}


//test
console.log(caesarCipher('middle-Outz', 3));