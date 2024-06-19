import inquirer from "inquirer";

let myBalance = 10000; //dollars
let myPincode = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
          name: "Q1",
          message: "Enter 4 digit pin code",
          type: "number"
        }
    ]
)
//     12345      ===  1234  
if (pinAnswer.Q1 === myPincode) {
    console.log("Correct Pincode!!!");

   let operationAnswer = await inquirer.prompt(
      [
        {
          name: "operation",
          message:"Please Select Options",
          type:"list",
          choices: ["Withdraw", "Balance check"]
        }
      ]
    );
    console.log(operationAnswer.operation);
    
    if (operationAnswer.operation === "Withdraw") {
      let  amountAnswer = await inquirer.prompt(
        [
          {
            name: "Amount",
            message:"Enter Withdraw amount",
            type:"number"
          }
        ]
      );
      
      myBalance -= amountAnswer.Amount;
      console.log("Your Remaining Balance is: "+ myBalance);
    }
} else{
  console.log("Incorrect Pincode");
}