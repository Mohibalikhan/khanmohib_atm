#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance = 10000; 
let mypin = 786;       

 let atmpassword= await inquirer.prompt([       //Q1
    {
    name: "key",                      //iske andr store hoga
    message:"Enter your Pin code:",   //sawal pin batao
    type:"number"                     //kis type ka hoga
    }
]);

//console.log(atmpassword); -->password dekhne ke lia


//We use conditions to satisfy conditions
if(atmpassword.key===mypin)
    {
    console.log("Correct Pin code !");
    
let nextoption= await inquirer.prompt(   //agr pin correct hoe to ye sawal pochna user se Q2
    [
        {
            name:"operations",
            message:"Please select option",
            type:"list",
            choices:["Withdraw","Check Balance"]
        }
    ]
);
if(nextoption.operations==="Withdraw"){
    //console.log("Your current balance is: "+(mybalance));           //--> this line called concatenation
    console.log(`Your current balance is:${mybalance}`);              //--> this line called template literal



    let amountwithdraw = await inquirer.prompt( //agar withdraw select kare to amont pocho user se Q3
   [
      {
        name: "amount",
        message:"Enter Withdraw Amount:",
        type:"number"

      }
    ]
    );
    if (amountwithdraw.amount>mybalance)
    
        {
            console.log("Insufficient balance!");
        }

   else if (mybalance -=amountwithdraw.amount)
    
   {
    //console.log("Your Remaining balance is: "+(mybalance)); //--> this line is called concatenation 
     console.log(`Your Remaining balance is: ${mybalance}`);   //--> this line is called template literal
   }

        
}

else if (nextoption.operations==="Check Balance")
    {
        console.log(mybalance);
    }

}

else 
{
    console.log("Wrong Pin!!!");
}

