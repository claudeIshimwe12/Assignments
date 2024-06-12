'use strict';

const calcBMI = function(){
    this.BMI = this.weight /(this.height ** 2)
    return this.BMI;
}
const mark = {
    name: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI
};

const john = {
    name: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI
};

mark.calcBMI()
john.calcBMI()

if(mark.BMI > john.BMI){
    console.log(`Mark's BMI(${mark.BMI}) is higher than John's (${john.BMI})`);
} else if(john.BMI > mark.BMI){
    console.log(`John's BMI(${john.BMI}) is higher than Mark's (${mark.BMI})`);
} else{
    console.log(`It looks they both have the same BMI, Wooow!`);
}