document.getElementById("Launches").addEventListener("click", function(event) {
  event.preventDefault();
  fetch("https://ll.thespacedevs.com/2.2.0/launch/upcoming/")
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      for (let i = 0; i < 6; ++i)  {
        results += "<div class='grid-item dataClass'><h2>" + json.results[i].name + "</h2><p>Date of launch: ";
        let date = (json.results[i].net).slice(0,10);
        results += date + "</p><p>Launch Service Provider: " + json.results[i].launch_service_provider.name
        + "</p><p>Rocket: " + json.results[i].rocket.configuration.name + "</p><p>Launching from "
        + json.results[i].pad.name + " at " + json.results[i].pad.location.name
        + ".</p></div>";
      }
      document.getElementById("llData").innerHTML = results;
    });
});
document.getElementById("Events").addEventListener("click", function(event) {
  event.preventDefault();
  fetch("https://ll.thespacedevs.com/2.020/event/upcoming/")
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      for (let i = 0; i < 6; ++i)  {
        results += "<div class='grid-item dataClass'><h2>" + json.results[i].name + "</h2><p>Location: ";
        let date = (json.results[i].date).slice(0,10);
        results += json.results[i].location + "</p><p>Date: " + date + "</p></div>";
      }
      document.getElementById("llData").innerHTML = results;
    });
});
document.getElementById("spaceStations").addEventListener("click", function(event) {
  event.preventDefault();
  fetch("https://ll.thespacedevs.com/2.2.0/spacestation/?offset=8&ordering=founded")
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      for (let i = 0; i < 6; ++i)  {
        results += "<div class='grid-item dataClass'><h2>" + json.results[i].name + "</h2><p>Status: "
        + json.results[i].status.name + "</p><p>Date Founded: " + json.results[i].founded
        + "</p><p>Owned by " + json.results[i].owners[0].name + "</p></div>";
      }
      document.getElementById("llData").innerHTML = results;
    });
});
