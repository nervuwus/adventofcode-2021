const { readFileSync } = require('fs');

let trig = "";
const input = readFileSync('./in.txt', { encoding: 'utf8' }).split('\n').map(n => n.split(''));

let zeroCount = 0;
let oneCount = 0;

function consumption(array, type) {
    for (let i = 0; i < array.length; i++) {

        for (let n = 0; n < array.length; n++) console.log(array[n][i]), array[n][i] = '0' ? zeroCount++ : oneCount++ ;

        (oneCount >= zeroCount) ? (type = "O" ? trig = "1" : trig = "0") : (type = "CO2" ? trig = "0" : trig = "1");
        
        for (let n = 0; n < array.length; n++) {
            if (array[n][i] != trig) {
                array.splice(array[n], 1);
                n--;
            }
        }
        
        if (array.length == 1) break;
        
        zeroCount = 0;
        oneCount = 0;
    }
    return array[0]?.join("");
}

const oxygen = consumption(input, "O")
const co2 = consumption(input, "CO2")

console.log(parseInt(oxygen, 2));
console.log(parseInt(co2, 2));

console.log(parseInt(oxygen, 2) * parseInt(co2, 2));