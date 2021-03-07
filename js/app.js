'use strict'

let seattle={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'],
    seattlePurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let count = 0; count < this.workingHours.length; count++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.seattlePurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
seattle.averagePurchased();
let liS=document.getElementById('Seattle')
function seattleLi(array) {
    for (let count = 0; count < seattle.workingHours.length+1; count++) {
        if (count < seattle.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=seattle.workingHours[count]+' : ' +seattle.seattlePurchasedPerDay[count];
            liS.appendChild(liText);
            let sum=0;
            let totalSum=sum+seattle.seattlePurchasedPerDay[i];
        } else if (count < seattle.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liS.appendChild(liText);
        } 
    };
}
seattleLi();

let tokyo={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
    tokyoPurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let count = 0; count < this.workingHours.length; count++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.tokyoPurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
tokyo.averagePurchased();
let liT=document.getElementById('tokyo')
function tokyoLi(array) {
    for (let count = 0; count < tokyo.workingHours.length+1; count++) {
        if (count < tokyo.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=tokyo.workingHours[count]+' : ' +tokyo.tokyoPurchasedPerDay[count];
            liT.appendChild(liText);
            let sum=0;
            let totalSum=sum+tokyo.tokyoPurchasedPerDay[i];
        } else if (count < tokyo.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liT.appendChild(liText);
        } 
    };
}
tokyoLi();


let dubai={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
    dubaiPurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let count = 0; count < this.workingHours.length; count++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.dubaiPurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
dubai.averagePurchased();
let liD=document.getElementById('dubai')
function dubaiLi(array) {
    for (let count = 0; count < dubai.workingHours.length+1; count++) {
        if (count < dubai.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=dubai.workingHours[count]+' : ' +dubai.dubaiPurchasedPerDay[count];
            liD.appendChild(liText);
            let sum=0;
            let totalSum=sum+dubai.dubaiPurchasedPerDay[i];
        } else if (count < dubai.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liD.appendChild(liText);
        } 
    };
}
dubaiLi();


let paris={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
    parisPurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let count = 0; count < this.workingHours.length; count++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.parisPurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
paris.averagePurchased();
let liP=document.getElementById('paris')
function parisLi(array) {
    for (let count = 0; count < paris.workingHours.length+1; count++) {
        if (count < paris.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=paris.workingHours[count]+' : ' +paris.parisPurchasedPerDay[count];
            liP.appendChild(liText);
            let sum=0;
            let totalSum=sum+paris.parisPurchasedPerDay[count];
        } else if (count < paris.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liP.appendChild(liText);
        } 
    };
}
parisLi();


let lima={
    minCustomer: 23,
    maxCustomer: 65,
    avgCookieSale: 6.3,
    workingHours:['6 AM','7 AM','8 AM','9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM'],
    limaPurchasedPerDay:[],
    customerPerHourGenerator:function (minCustomer,maxCustomer){
        let generator=Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
              return generator;
        },
    averagePurchased:function (customerPerHourGenerator,avgCookieSale) {
        for (let count = 0; count < this.workingHours.length; count++) {
            let simulatedAmounts=parseInt(this.customerPerHourGenerator()*this.avgCookieSale);
            this.limaPurchasedPerDay.push(simulatedAmounts);            
        }
    },
}
lima.averagePurchased();
let liL=document.getElementById('lima')
function limaLi(array) {
    for (let count = 0; count < lima.workingHours.length+1; count++) {
        if (count < lima.workingHours.length) {
            let liText=document.createElement('li');
            liText.innerText=lima.workingHours[count]+' : ' +lima.limaPurchasedPerDay[i];
            liL.appendChild(liText);
            let sum=0;
            let totalSum=sum+lima.limaPurchasedPerDay[i];
        } else if (count < lima.workingHours.length+1) {
            let liText=document.createElement('li');
            liText.innerText='Total Sum'+' : ' + 'totalSum';
            liL.appendChild(liText);
        } 
    };
}
limaLi();