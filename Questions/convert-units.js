/*
Write a function that converts between metric and imperial units. 
Break up the units into millimeters, centimeters, and meters for metric, 
and into inches and feet for imperial, up to 2 decimal places.


Example: 

> convertUnits(7, "ft")
> "2m 13cm 3.6mm"

> convertUnits(44, "cm")
> "1ft 5.32in"
*/

const convertUnits = (num, unit) => {
    
    // return value
    let result = '';
    // temporary value
    let temp;

    // if unit is imperial, we want to calculate how many meters, centimeters, and millimeters there are
    if (unit === 'ft' || unit === 'in') {
        if (unit === 'ft') temp = num*304.8;
        if (unit === 'in') temp = num*25.4;
    }

    const m = Math.floor(temp/1000);
    const cm = Math.floor((temp % 1000)/1000 * 100);
    const mm = (temp % 1000) % (1000)

    console.log(mm);
    // if unit is metric, we want to calculate how many feet and inches
    // round to 2 decimal places
    return result;
}

// tests
console.log(convertUnits(7, "ft")); // 2m 13cm 3.6mm
//console.log(convertUnits(44, "cm")); // 1ft 5.32in
