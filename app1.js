"use strict"
var hourArray = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', '9pm: '];
// below is a Object-special-construction-CAPITALIZE first letter to indicate
var totalDailyLbs = 0;
function Kiosk(locName, minCust, maxCust, cupsPer, lbsPer) {
this.locName = locName;
this.minCust = minCust;
this.maxCust = maxCust;
this.cupsPer = cupsPer;
this.lbsPer = lbsPer;
this.totalDailyLbs = 0;
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
      // console.log("generateRandom is " + generateRandom);
      // console.log("cupsEachHour = " + cupsEachHour);
      this.arrayCupsEachHour.push(cupsEachHour);
      this.arrayLbsFromCups.push(cupsEachHour/20);
      var lbsEachHour = generateRandom * this.lbsPer;
      this.arrayLbsEachHour.push(lbsEachHour);
      totalDailyLbs += cupsEachHour/20 + lbsEachHour;
      console.log(this.locName + " ; " + this.totalDailyLbs);
      // console.log("array of cups each hour = " + this.arrayCupsEachHour);
      // console.log("array of pounds each hour = " + this.arrayLbsEachHour);
      // create a row, append the row, create a data cell, append that cell
      // making reference to the table by putting in "tableID"
    }
};

// below converts Kiosk to pikePLace with the below input
var pikePlace = new Kiosk("Pike Place Market", 14, 55, 1.2, 3.7);
var capitalHill = new Kiosk("Capital Hill", 32, 48, 3.2, 0.4);
var seattlePublicLibrary = new Kiosk("Seattle Public Library", 49, 75, 2.6, 0.2);
var southLakeUnion = new Kiosk("South Lake Union", 35, 88, 1.3, 3.7);
var seaTacAirport = new Kiosk("Sea-Tac Airport", 68, 124, 1.1, 2.7);
var websiteSales = new Kiosk("Website Sales", 3, 6, 0, 6.7);
// how do i generate new variable input on submit


// use an eventlistener for the event
// var subButton = document.getElementById('subButton');
// subButton.addEventListener('click', getUserName, false);
//
// var generateNewUserInput = new Kiosk("nameField", 0, 2, 2, 2);

// test ------------------------


pikePlace.hourlySales();
capitalHill.hourlySales();
seattlePublicLibrary.hourlySales();
southLakeUnion.hourlySales();
seaTacAirport.hourlySales();
websiteSales.hourlySales();

// generateNewUserInput.hourlySales();
// console.log(generateNewUserInput.hourlySales);

// HERE FROM ABOVE IS PERFECT!!!! DONT FUCK W/ THIS


var createTable = function(){
    var section = document.getElementById('table');
    var table = document.createElement('table');
    var times = ['Location', '6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12am: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', '9pm: '];
// row1 is the parent
    var row1 = document.createElement('tr');
    for (var i = 0; i < times.length; i++){
      var tableHead = document.createElement('th');
      tableHead.textContent = times[i];
      row1.appendChild(tableHead);
  };
  table.appendChild(row1);
  var places = [pikePlace, capitalHill, seattlePublicLibrary, southLakeUnion, seaTacAirport, websiteSales];
  for (var m = 0; m < places.length; m++) {
    var row2 = document.createElement('tr');
    //pl = places in bold
    var pl = document.createElement('th');
    pl.textContent = places[m].locName;
    row2.appendChild(pl);

    for (var p = 0; p < hourArray.length; p++){
      var totalBeans = document.createElement('td');
      totalBeans.textContent = places[m].arrayLbsEachHour[p].toFixed(1);
      row2.appendChild(totalBeans);
    };

table.appendChild(row2)
};

  section.appendChild(table);
};

createTable();
// new input from user
var x = totalDailyLbs.toFixed(0);
document.write(x + 'lbs of beans needed per day.');

var newLocationUserInput1 = document.getElementById('newLocationUserInput1').value;
// console.log('newLocationUserInput1').value;
var newMinCustUserInput2 = document.getElementById('newMinCustUserInput2');
var newMaxCustUserInput3 = document.getElementById('newMaxCustUserInput3');
var newCupsPerCustUserInput4 = document.getElementById('newCupsPerCustUserInput4');
var newLbsPerCustUserInput5 = document.getElementById('newLbsPerCustUserInput5');
