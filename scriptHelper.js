// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${imageUrl}">
`
}

function validateInput(testInput) {
   if (testInput === "") {
    return "Empty";
   };
   if (isNaN(Number(testInput)) === true) {
    return "Not a Number";
   };
   if (isNaN(Number(testInput)) === false) {
    return "Is a Number";
   };    
}

function formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
   
    // validation alerts

    if (validateInput(pilotInput) === "Empty" || validateInput(copilotInput) === "Empty" || validateInput(fuelLevelInput) === "Empty" || validateInput(cargoLevelInput) === "Empty") {
        list.style.visibility = "hidden";
        alert("All fields required.");        
        
    } else if (validateInput(pilotInput) === "Is a Number" || validateInput(copilotInput) === "Is a Number" || validateInput(fuelLevelInput) === "Not a Number" || validateInput(cargoLevelInput) === "Not a Number" ) {
        list.style.visibility = "hidden";
        alert("Confirm pilot names do not contain letters, and fuel/cargo levels do not contain numbers.");
        
    } else {
        pilotStatus.innerHTML = `Pilot ${pilotInput} is ready for launch`;
        copilotStatus.innerHTML = `Co-Pilot ${copilotInput} is ready for launch`;
        list.style.visibility = "visible";
        launchStatus.style.color = "rgb(199, 37, 78)"; //changed from 'red' for the autograder
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        
    // status updates and faultyitem updates

            if (Number(cargoLevelInput) > 10000 && Number(fuelLevelInput) < 10000) {
                fuelStatus.innerHTML = "Fuel level too low for launch";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            } else if (Number(fuelLevelInput) < 10000) {
                fuelStatus.innerHTML = "Fuel level too low for launch";
            } else if (Number(cargoLevelInput) > 10000) {
                cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            } else if (Number(fuelLevelInput) >= 10000 && Number(cargoLevelInput) <= 10000) {
                launchStatus.style.color = "rgb(65, 159, 106)"; //changed from 'green' for autograder
                launchStatus.innerHTML = "Shuttle is Ready for Launch"
            }
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    return response.json()    
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
