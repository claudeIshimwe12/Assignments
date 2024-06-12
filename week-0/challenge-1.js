'use strict'

// TEST DATA 1
const dolphinsScore = [44, 23, 71];
const koalasScore = [65, 54, 49];

const calcAverage = (arr) =>{
    const sum = arr.reduce((a,b) => a + b)
    return sum/arr.length
}
const checkWinner = (avgDolphins,avgKoalas) =>{
    if(avgDolphins >= avgKoalas *2 ){
        return `Dolphins wins by (${avgDolphins} vs. ${avgKoalas})` 
    } else if(avgKoalas >= avgDolphins * 2){
        return `Koalas wins by (${avgKoalas} vs. ${avgDolphins})` 
    } else {
        return 'No team wins !'
    }
}
const avgDolphins = calcAverage(dolphinsScore)
const avgKoalas = calcAverage(koalasScore)

console.log('Game 1')
console.log(checkWinner(avgDolphins,avgKoalas))

// TEST DATA 2

const dolphinsGame2 = [85,54,41];
const koalasGame2 = [23,34,27];

const avgDolphinsG2 = calcAverage(dolphinsGame2);
const avgKoalasG2 = calcAverage(koalasGame2);
console.log('Game 2')
console.log(checkWinner(avgDolphinsG2, avgKoalasG2));
