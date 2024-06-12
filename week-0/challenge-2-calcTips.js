'use strict';

const bills = [125,555,44];

const calcTip = arr =>{
    const tips = [];
    arr.forEach(element => {
        if(element <= 300 && element >= 50){
            tips.push((element * 15 )/100)
        } else {
            tips.push((element * 20) /100)
        }
    });
    return tips;
}

console.log(calcTip(bills));