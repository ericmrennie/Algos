/*
You will be given a list of 32 bit unsigned integers. 
Flip all the bits ( and ) and return the result as an unsigned integer.

Complete the flippingBits function in the editor below.
flippingBits has the following parameter(s):
int n: an integer

Returns
int: the unsigned decimal integer result
*/

function flippingBits(n) {
    let binaryString = n.toString(2);
    while(binaryString.length < 32) {
        binaryString = '0' + binaryString;
    }
    let flippedBinaryString = '';
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') flippedBinaryString += '1';
        if (binaryString[i] === '1') flippedBinaryString += '0';
    }
    return parseInt(flippedBinaryString, 2);
}

console.log(flippingBits(1));