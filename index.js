// Import stylesheets
import "./style.css";

var cityElems = document.getElementsByClassName("citta");
var t = 0;
for (let elem of cityElems) {
  elem.onclick = () => display(elem.innerHTML);
}
calcoloMedia.onclick = () => media();

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
  request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?APPID=9bd419b49d4261031516ad5fddac3439&units=metric&q=" +
      city,
    true
  );
  request.send();
}

function display(city) {
  doCity(city, data => {
    document.getElementById("risposta").innerHTML =
      "A " + city + " ci sono " + data.main.temp + " gradi";
});
}

function media() {
  t=0;
  for (let city of cityElems) {
    doCity(city.innerHTML, data => {
      t += data.main.temp / cityElems.length;
      document.getElementById("media").innerText = t;
    });
  }
}
