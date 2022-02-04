// Import stylesheets
import "./style.css";

const apiKey = "d0475be3a1967b1b49dfc02c8128001a";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
var cityElems = document.getElementsByClassName("citta");
for (let elem of cityElems) {
  elem.onclick = () => display(elem.innerHTML);
}
document.getElementById("calcoloMedia").onclick = () => media();

function doCity(city, callback) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"
  request.onload = function() {
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      callback(dataObject);
    } else {
      document.getElementById("risposta").innerText = "Errore";
    }
  };
  request.open( "GET", URL + city, true );
  request.send();
}

function display(city) {
  doCity(city, data => {
    document.getElementById("risposta").innerHTML =
      "A " + city + " ci sono " + data.main.temp + " gradi";
});
}

function media() {
  let t = 0;
  for (let city of cityElems) {
    doCity(city.innerHTML, data => {
      t += data.main.temp / cityElems.length;
      document.getElementById("media").innerText = t;
    });
  }
}
