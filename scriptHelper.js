// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") { 
     console.log("empty");
     return "Empty";

    } else if (((!isNaN(Number(testInput))))) {
     console.log("is a number / not a string");
     return "Is a Number"; 
     
    } else if (typeof testInput === "string") {
     console.log("is a string / not a number");
     return "Not a Number"; 
    } 
 }

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotNameInput = document.querySelector("input[name=pilotName]").value;
    let copilotNameInput = document.querySelector("input[name=copilotName]").value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
    let cargoMassInput = document.querySelector("input[name=cargoMass]").value;


   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields required.");
   } else if (validateInput(pilotName === "Is a Number" || validateInput(copilotName) === "Is a Number") {
    alert("Pilot Name / Co-Pilot name cannot contain numbers.");
   } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
    alert("Fuel Level / Cargo Level cannot contain letters.");
   } else {

   pilotStatus.innerHTML = `Pilot ${pilotNameInput} is ready for launch.`;
   copilotStatus.innerHTML = `Co-Pilot ${copilotNameInput} is ready for launch.`;

//     if (Number(fuelLevel)) < 10000 {
//         faultyItems
//     }



//   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
