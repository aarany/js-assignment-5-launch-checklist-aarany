// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo, formSubmission } = require("./scriptHelper");
// the alert only works when i comment out the const

window.addEventListener("load", function() {

    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName").value;
        let copilotInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel").value;
        let cargoLevelInput = document.querySelector("input[name=cargoMass").value;

        

        formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoLevelInput);
        //formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })
}); 


    
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let myPlanet = pickPlanet(listedPlanets);
       let name = myPlanet.name;
       let diameter = myPlanet.diameter;
       let star = myPlanet.star;
       let distance = myPlanet.distance;
       let moons = myPlanet.moons;
       let imageUrl = myPlanet.image;

       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
   })
   