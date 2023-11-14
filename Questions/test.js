const getMaximumPower = (power) => {
    // sum variable
    let sum = 0;
    // iterate through the power array
    for (let i = 0; i < power.length; i++) {
        // check to see if the power array contains a number that is power[i] + 1 or power[i] - 1
        sum += power[i];
        let larger = power[i] + 1;
        let smaller = power[i] - 1;
        // iterate through power
        for (let j = 0; j < power.length; j++) {
        // delete the values
            if (power[j] === larger) power.splice(power[j], 1);
            if (power[j] === smaller) power.splice(power[j], 1)
        }
        console.log(power);
    }
    // return the sum of the array
    return sum;
    console.log('this is the sum: ', sum);
}

// test
const test = [1,1,1,2];
console.log(getMaximumPower(test));