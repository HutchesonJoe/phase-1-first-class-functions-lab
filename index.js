const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

returnFirstTwoDrivers(["Juan", "Carlos", "Nancy"])

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    function fareMultiplier(fare) {
      //console.log(fareMultiplier);
      return fare * number;
    }
  
        return fareMultiplier;
    }


const fareDoubler = createFareMultiplier(2);
  
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, choice){
    return choice(drivers);
   }
      


  
