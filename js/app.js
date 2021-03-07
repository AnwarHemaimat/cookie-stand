'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cookieTotalsPerHour = [];

let seattle={
name1='Seattle',    
minCust= 23,
maxCust= 65,
avgCookiSale= 6.3,
}
let tokyo={
    name1='Tokyo',    
    minCust= 3,
    maxCust= 24,
    avgCookiSale= 1.2,
}
let dubai={
    name1='Dubai',    
    minCust= 11,
    maxCust= 38,
    avgCookiSale= 3.7,
}
let paris={
    name1='Paris',    
    minCust= 20,
    maxCust= 38,
    avgCookiSale= 2.3,
}
let lima={
    name1='Lima',    
    minCust= 2,
    maxCust= 16,
    avgCookiSale= 4.6,
}

function randomSum(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}
function avgSum(){
    let avg=(max+min/2); 
    console.log(avg);
}

