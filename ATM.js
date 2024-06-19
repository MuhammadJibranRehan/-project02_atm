"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 10000; //dollars
let myPincode = 1234;
let pinAnswer = await inquirer_1.default.prompt([
    {
        name: "Q1",
        message: "Enter 4 digit pin code",
        type: "number"
    }
]);
//     12345      ===  1234  
if (pinAnswer.Q1 === myPincode) {
    console.log("Correct Pincode!!!");
    let operationAnswer = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "Please Select Options",
            type: "list",
            choices: ["Withdraw", "Balance check"]
        }
    ]);
    console.log(operationAnswer.operation);
    if (operationAnswer.operation === "Withdraw") {
        let amountAnswer = await inquirer_1.default.prompt([
            {
                name: "Amount",
                message: "Enter Withdraw amount",
                type: "number"
            }
        ]);
        myBalance -= amountAnswer.Amount;
        console.log("Your Remaining Balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect Pincode");
}
