'use strict'
let hoursArray = ["6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];
let seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  total: 0,
  avgCookiesSales: [],
  avgCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },

  calcAvgCookies: function () {
    for (let i = 0; i < hoursArray.length; i++) {
      let avgCookies = Math.floor(this.avg * this.avgCustomersPerHour())
      this.total = avgCookies + this.total;
      this.avgCookiesSales.push(avgCookies)
    }
  },
  render: function () {
    let h4 = document.createElement('h4');
    h4.innerText = this.name;
    let ul = document.createElement('ul');
    for (let i = 0; i < hoursArray.length; i++) {
      let li = document.createElement('li');
      li.innerText = hoursArray[i]+': '+this.avgCookiesSales[i];
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.innerText = 'Total: '+this.total;
    ul.appendChild(li);
    let body= document.getElementById('salesBody')
    body.appendChild(h4)
    body.appendChild(ul)
  }
}

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  total: 0,
  avgCookiesSales: [],
  avgCustomersPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcAvgCookies: function () {
    for (let i = 0; i < hoursArray.length; i++) {
      let avgCookies = Math.floor(this.avg * this.avgCustomersPerHour())
      this.total = avgCookies + this.total;
      this.avgCookiesSales.push(avgCookies)
    }
  },
  render: function () {
    let h4 = document.createElement('h4');
    h4.innerText = this.name;
    let ul = document.createElement('ul');
    for (let i = 0; i < hoursArray.length; i++) {
      let li = document.createElement('li');
      li.innerText = hoursArray[i]+': '+this.avgCookiesSales[i];
      ul.appendChild(li);
    }
    let li = document.createElement('li');
    li.innerText = 'Total: '+this.total;
    ul.appendChild(li);
    let body= document.getElementById('salesBody')
    body.appendChild(h4)
    body.appendChild(ul)
  }
}

  let dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avg: 1.7,
    total: 0,
    avgCookiesSales: [],
    avgCustomersPerHour: function () {
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    calcAvgCookies: function () {
      for (let i = 0; i < hoursArray.length; i++) {
        let avgCookies = Math.floor(this.avg * this.avgCustomersPerHour())
        this.total = avgCookies + this.total;
        this.avgCookiesSales.push(avgCookies)
      }
    },
    render: function () {
      let h4 = document.createElement('h4');
      h4.innerText = this.name;
      let ul = document.createElement('ul');
      for (let i = 0; i < hoursArray.length; i++) {
        let li = document.createElement('li');
        li.innerText = hoursArray[i]+': '+this.avgCookiesSales[i];
        ul.appendChild(li);
      }
      let li = document.createElement('li');
      li.innerText = 'Total: '+this.total;
      ul.appendChild(li);
      let body= document.getElementById('salesBody')
      body.appendChild(h4)
      body.appendChild(ul)
    }
  }

    let paris = {
      name: 'Paris',
      min: 20,
      max: 38,
      avg: 2.3,
      total: 0,
      avgCookiesSales: [],
      avgCustomersPerHour: function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
      },
      calcAvgCookies: function () {
        for (let i = 0; i < hoursArray.length; i++) {
          let avgCookies = Math.floor(this.avg * this.avgCustomersPerHour())
          this.total = avgCookies + this.total;
          this.avgCookiesSales.push(avgCookies)
        }
      },
      render: function () {
        let h4 = document.createElement('h4');
        h4.innerText = this.name;
        let ul = document.createElement('ul');
        for (let i = 0; i < hoursArray.length; i++) {
          let li = document.createElement('li');
          li.innerText = hoursArray[i]+': '+this.avgCookiesSales[i];
          ul.appendChild(li);
        }
        let li = document.createElement('li');
        li.innerText = 'Total: '+this.total;
        ul.appendChild(li);
        let body= document.getElementById('salesBody')
        body.appendChild(h4)
        body.appendChild(ul)
      }
    }

      let lima = {
        name: 'Lima',
        min: 2,
        max: 16,
        avg: 4.3,
        total: 0,
        avgCookiesSales: [],
        avgCustomersPerHour: function () {
          return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        },
        calcAvgCookies: function () {
          for (let i = 0; i < hoursArray.length; i++) {
            let avgCookies = Math.floor(this.avg * this.avgCustomersPerHour())
            this.total = avgCookies + this.total;
            this.avgCookiesSales.push(avgCookies)
          }
        },
        render: function () {
          let h4 = document.createElement('h4');
          h4.innerText = this.name;
          let ul = document.createElement('ul');
          for (let i = 0; i < hoursArray.length; i++) {
            let li = document.createElement('li');
            li.innerText = hoursArray[i]+': '+this.avgCookiesSales[i];
            ul.appendChild(li);
          }
          let li = document.createElement('li');
          li.innerText = 'Total: '+this.total;
          ul.appendChild(li);
          let body= document.getElementById('salesBody')
          body.appendChild(h4)
          body.appendChild(ul)
        }
      }
       
seattle.calcAvgCookies()
seattle.render()
console.log(seattle)
tokyo.calcAvgCookies()
tokyo.render()
dubai.calcAvgCookies()
dubai.render()
paris.calcAvgCookies()
paris.render()
lima.calcAvgCookies()
lima.render()


// const locationSalesByHour = [];
//  const locationData = [
//      [`Seattle`, 23, 65, 6.3, [], 0],
//      [`Tokyo`, 3, 24, 1.2, [], 0],
//      [`Dubai`, 11, 38, 3.7, [], 0],
//      [`Paris`, 20, 38, 2.3, [], 0],
//      [`Lima`, 2, 16, 4.6, [], 0],
//   ];

// //Get cookie sold to table 
// let cookieshopTable = document.getElementById('cookies-sold');
// //Constructor for store sales data
//   const Location = function (locationcity, minCust, maxCust,salesByHour, avgCookiSales, totalDailySales) {
//      this.locationcity = locationcity;
//      this.minCust = minCust;
//      this.maxCust = maxCust;
//      this.salesByHour = salesByHour;
//      this.avgCookiSales = avgCookiSales;
//      this.totalDailySales = totalDailySales;
//      Location.data.push(this);
//    };

//   Location.data = [];
//   Location.prototype.avgCustomersPerHour = function() {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//     };

//     Location.prototype.avgCookieSales = function() {
//         for (let count = 0; count < hoursArray.length; count++) {
//           let cookieSales = Math.round(this.avgCustomersPerHour() * this.avgCookiSales);
//           this.salesByHour.push(cookieSales);
//         }
//             locationSalesByHour.push(this.salesByHour);
//        };

//        Location.prototype.totalCookieSales = function() {
//         this.totalDailySales = 0;
//         for(let count = 0; count < this.salesByHour.length; count++) {
//           this.totalDailySales += this.salesByHour[count];
//         };
//     };


// CookieShop.prototype.render = function() { 
//   let trElement = document.createElement('tr');
//   let thElement = document.createElement('th');
//   thElement.textContent = this.location;
//   trElement.appendChild(thElement);
// }

// avgCustomersPerHour();
// avgCookieSales();
// totalCookieSales();
// render();
