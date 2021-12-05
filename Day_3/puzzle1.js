const { readFileSync } = require("fs");

let zeroCount = 0;
let oneCount = 0;

const lines = readFileSync("input.txt").toString("utf-8").split("\n");
const gamma = [];
const epsilon = [];
let Gdigit = "";
let Edigit = "";


for (let a = 0; a < 12; a++) {

    for (let i = 0; i < lines.length; i++) {
        let char = lines[i].charAt(a);
        if (parseInt(char) == 1) oneCount++;
        else zeroCount++;
    }

    if (oneCount > zeroCount) {
        Gdigit += "1";
        Edigit += "0";
    }
    else {
        Gdigit += "0"
        Edigit += "1"
    };
    zeroCount = 0;
    oneCount = 0

}

gamma.push(parseInt(Gdigit, 2));
epsilon.push(parseInt(Edigit, 2));

console.log(gamma);
console.log(epsilon)

console.log("Power Consumption: ", gamma[0] * epsilon[0]);