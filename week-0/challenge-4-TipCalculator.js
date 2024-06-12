'use strict';

const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

const calcTip = bill =>{ 
        if(bill <= 300 && bill >= 50){
            return (bill * 15 )/100
        } else {
            return(bill * 20) /100
        }
}

for(let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + calcTip(bills[i]))
}

console.log(tips)
console.log(totals)
