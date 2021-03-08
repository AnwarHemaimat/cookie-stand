'use strict';
let hoursArray = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
function Stores(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.avgCookiesSales = [];
  this.avgCustomersPerHour = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.calcAvgCookies = function () {
    for (let i = 0; i < hoursArray.length; i++) {
      let avgCookies = Math.floor(this.avg * this.avgCustomersPerHour());
      this.total = avgCookies + this.total;
      this.avgCookiesSales.push(avgCookies);
    }
  };
  this.render = function () {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let td = document.createElement('td');
    td.innerText = this.name;
    tr.appendChild(td);
    for (let i = 0; i < this.avgCookiesSales.length; i++) {
      td = document.createElement('td');
      td.innerText = this.avgCookiesSales[i];
      tr.appendChild(td);
    }
    td = document.createElement('td');
    td.innerText = this.total;
    tr.appendChild(td);
  };
}

let table = document.createElement('table');
document.getElementById('salesBody').appendChild(table);

function tableHeader() {
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  for (let i = 0; i < hoursArray.length; i++) {
    th = document.createElement('th');
    th.innerText = hoursArray[i];
    tr.appendChild(th);
  }
  // th = document.createElement('th');
  // th.innerText = 'Total';
  // tr.appendChild(th);
  th = document.createElement('th');
  th.innerText = 'Daily Location Total';
  tr.appendChild(th);
}
tableHeader();

let seattle = new Stores('Seattle', 23, 65, 6.3);
seattle.calcAvgCookies();
seattle.render();
let tokyo = new Stores('Tokyo', 3, 24, 1.2);
tokyo.calcAvgCookies();
tokyo.render();
let dubai = new Stores('Dubai', 11, 38, 1.7);
dubai.calcAvgCookies();
dubai.render();
let paris = new Stores('Paris', 20, 38, 2.3);
paris.calcAvgCookies();
paris.render();
let lima = new Stores('Lima', 2, 16, 4.3);
lima.calcAvgCookies();
lima.render();

function tableFooter() {
  let tf = document.createElement('tfoot');
  table.appendChild(tf);
  let tr = document.createElement('tr');
  table.appendChild(tr);
  let th = document.createElement('th');
  th.innerText = 'Total';
  tr.appendChild(th);

  let finalTotal=0;
  for (let i = 0; i < hoursArray.length; i++) {
    for(let j =0 ; j < Stores.length ; j++){
      finalTotal=finalTotal+ Stores.avgCookiesSales[j][i];
      console.log(finalTotal);
    }
    th = document.createElement('th');
    th.innerText = finalTotal;
    tr.appendChild(th);
  
  }
}
tableFooter();
