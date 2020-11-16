const API_KEY = "PRIVATE KEY WOULD GO HERE";

const myForm = document.getElementById("myForm")
myForm.addEventListener('keyup', ({key}) => {
    if (key === "Enter") {
        getLocation();
    }
})

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCloseStops);
    }
}

const getCloseStops = (position = '') => {
    
    if (position == '') {
        lat = document.getElementById("lat").value;
        long = document.getElementById("long").value;
    } else {
        lat = position.coords.latitude;
        long = position.coords.longitude;

    }

    console.log(`${lat}, ${long}`)
    fetch(`http://bustime.mta.info/api/where/stops-for-location.json?lat=${lat}&lon=${long}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(showCloseStops)
    .catch(msg => {
        console.log("error in parsing data")
    })
    
}

function showCloseStops(data) {
    console.log(data);
}