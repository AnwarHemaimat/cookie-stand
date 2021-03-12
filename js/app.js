'use strict';
let hoursArray = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
let locatins = [];
function Stores(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.avgCookiesSales = [];
  locatins.push(this);
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
  // Render Function
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

// Create Table
let table = document.createElement('table');
document.getElementById('salesBody').appendChild(table);

// Table Header
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

// Table Footer
function tableFooter() {
  // let tf = document.createElement('tfoot');
  // table.appendChild(tf);
  let tr = document.createElement('tr');
  table.appendChild(tr);
  // tr.parentNode.insertBefore (tr, tr.nextSibling );
  let th = document.createElement('th');
  th.innerText = 'Total';
  tr.appendChild(th);

  let finalTotal = 0;
  for (let i = 0; i < hoursArray.length; i++) {
    let hourlytotal = 0;
    for (let j = 0; j < locatins.length; j++) {
      hourlytotal += locatins[j].avgCookiesSales[i];
      finalTotal += hourlytotal;
      console.log(finalTotal);
    }
    th = document.createElement('th');
    th.innerText = hourlytotal;
    // th.innerText = finalTotal;
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = finalTotal;
  tr.appendChild(th);
}
tableFooter();

// New Location
let form = document.getElementById('form');
form.addEventListener('submit', addNewLocation);
function addNewLocation(event) {
  event.preventDefault();
  let locationcity = event.target.locationcity.value;
  let minCustomerPerHour = parseFloat(event.target.minCustomerPerHour.value);
  let maxCustomerPerHour = parseFloat(event.target.maxCustomerPerHour.value);
  let avgCookiesPerCustomer = parseFloat(event.target.avgCookiesPerCustomer.value);

  let newLocation = new Stores(locationcity, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerCustomer);

  newLocation.calcAvgCookies();
  table.innerHTML = '';
  tableHeader();

  for (let i = 0; i < locatins.length; i++) {

    if (locationcity === '' || locationcity === null || minCustomerPerHour === '' || minCustomerPerHour === null || maxCustomerPerHour === '' || maxCustomerPerHour === null || avgCookiesPerCustomer === '' || avgCookiesPerCustomer === null) {
      alert('Please do not left the form empty');
      console.log(alert);
    } else {
      locatins[i].render();
    }

  }
  tableFooter();
}
