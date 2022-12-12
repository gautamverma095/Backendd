// const crypto = require("crypto")

// console.log(crypto.randomInt(0, 10));

// console.log('myArgs: ', myArgs);
const Random = require("crypto");
const num = Random.randomInt(10, 101);
// console.log(process.argv)
const args = process.argv.slice(2);
console.log('myArgs: ', args);
// add, sub, mult, divide, sin, cos, tan, random
switch (args[0]) {
    case "add": {
        console.log(+args[1] + +args[2]);
        break

    }
    case "sub": {
        console.log(args[1] - args[2]);
        // return;
        break
    }
    case "mult": {
        console.log(args[1] * args[2]);
        // return;
        break
    }
    case "divide": {
        console.log(args[1] / args[2]);
        // return;
        break
    }
    case "sin": {
        console.log(Math.sin(args[1]));
        // return;
        break
    }
    case "cos": {
        console.log(Math.cos(args[1]));
        // return;
        break
    }
    case "tan": {
        console.log(Math.tan(args[1]));
        // return;
        break
    }
    case "random": {
        console.log(num);
        // return;
        break
    }

    default:
        console.log("not available");
}
