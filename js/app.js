"use strict"
var hourArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', '9pm: '];
// below is a Object-special-construction-CAPITALIZE first letter to indicate
function Kiosk(locName, minCust, maxCust, cupsPer, lbsPer) {
this.locName = locName;
this.minCust = minCust;
this.maxCust = maxCust;
this.cupsPer = cupsPer;
this.lbsPer = lbsPer;
this.arrayCupsEachHour = [];
this.arrayLbsFromCups = [];
this.arrayLbsEachHour = [];
};
//after prototype. we name the function we are using
Kiosk.prototype.randomCust = function(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
//^---return makes it public globally
};
Kiosk.prototype.hourlySales = function() {
  console.log("inside hourlySales");
for (var i=0;i<hourArray.length;i++) {
var generateRandom = this.randomCust(this.minCust, this.maxCust);
var cupsEachHour = generateRandom * this.cupsPer;
console.log("generateRandom is " + generateRandom);
console.log("cupsEachHour = " + cupsEachHour);
this.arrayCupsEachHour.push(cupsEachHour);
this.arrayLbsFromCups.push(cupsEachHour/20);
var lbsEachHour = generateRandom * this.lbsPer;
this.arrayLbsEachHour.push(lbsEachHour);
console.log("array of cups each hour = " + this.arrayCupsEachHour);
console.log("array of pounds each hour = " + this.arrayLbsEachHour);
}
};
// below converts Kiosk to pikePLace with the below input
var pikePlace = new Kiosk("Pike Place Market", 14, 55, 1.2, 3.7);
var capitalHill = new Kiosk("Capital Hill", 32, 48, 3.2, 0.4);
var seattlePublicLibrary = new Kiosk("Seattle Public Library", 49, 75, 2.6, 0.2);
var southLakeUnion = new Kiosk("South Lake Union", 35, 88, 1.3, 3.7);
var seaTacAirport = new Kiosk("Sea-Tac Airport", 68, 124, 1.1, 2.7);
var websiteSales = new Kiosk("Website Sales", 3, 6, 0, 6.7);
pikePlace.hourlySales();
// HERE FROM ABOVE IS PERFECT!!!! DONT FUCK W/ THIS
capitalHill.hourlySales();

// 
// var listName = document.createElement('h2');
// listName.textContent = 'Pike Place Market';
// document.body.appendChild(listName);

//now render table1
// you build it backwards

// below playing w/ options-------------------------

// var createTable = function() {
// };
// createTable();
// above playing w/ options--------------------------

//     var tableBody = document.getElementById('table1');
//     var row1 = document.createElement('tr');
//     var cell1 = document.createElement('th');
//     cell1.textContent = 'Name: ';
//     row1.appendChild(cell1);
//     // created element(cell.textContent), then tell it what content to print(.appendChild)
//     tableBody.appendChild(row1);
// // for loop inside var createTable
//     for (var i = 0; i < hourArray.length; i++) {
// // what to do as counting through time
//       var cell = document.createElement('th');
//       cell.textContent = hourArray[i];
//       row1.appendChild(cell);
//       }
// };

// //times in top row
// // location down column
//
//
//
// // below var hours at top create a function to input
// function xyz(name, mincustomer, max customer,) {
// this.name =
//
// };
//
// // create a looop and inside put
// var cell = document.createElement(i)
//
// // for loop inside a for loop
//
// for (var x = 0; x < allkiosk.length; x++) {
// // everytime this goes through it creates a new row
// var rows = document.createElement('tr');
// tableEl.appendChild(rows);
// var firstCell = document.creatElement('td');
// // put in what the  cell actually does
// firstCell.textContent = this.allkiosk[x].kioskName;
// secondCell.textContent = allkiosk[y].hourlybeans[y];
// // above this isn't finished i need help
// // below this is a forloop inside a forloop
//
// };
