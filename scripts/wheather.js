const weatherContainer = document.querySelector("#weather_container");


const COORDS_LS = "current_coords";
const api_key = "0fe3e1518a5a0cefb66da771f119c310";
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
function requestWeatherInfo(lat, long) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`).then(function (response) {
        return response.json();
    }).then(function(obj) {
        //const parsed_val = JSON.parse(json);
        console.log(obj);
        const main = obj.main;
        const temp = main.temp;
        const name = obj.name;
        weatherContainer.innerHTML = `${temp}˚C <br>@${name}`;
    })
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(function (position) {
    
    const coords = {
        latitude : position.coords.latitude,
        longitude : position.coords.longitude
    }
    
    localStorage.setItem(COORDS_LS, JSON.stringify(coords));
    requestWeatherInfo(coords.latitude, coords.longitude);
    }, function () {
        console.log("Can't Access GEO location.")
    })
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if (loadedCoords === null)
    {
        askForCoords();
    }
    else
    {
        const parsed_coords = JSON.parse(loadedCoords);
        requestWeatherInfo(parsed_coords.latitude, parsed_coords.longitude);
        //Get Weather via API
    }
}
function init() {
    loadCoords();
}

init();