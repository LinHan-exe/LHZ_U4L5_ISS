let data = ""

async function getData(){
    const response = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
    data = await response.json();
    console.log("Requested Data");
    await getLoc();
}

async function getLoc(){
    
    const{latitude, longitude, velocity} = data;
    
    console.log(latitude);
    console.log(longitude);
    console.log(velocity);

    document.getElementById('lat').textContent = "The latitude is: " + latitude;
    document.getElementById('lon').textContent = "The longitude is: " + longitude;
    document.getElementById('vel').textContent = "The velocity is: " + velocity;
    console.log("Locationed");

    var map = L.map('map').setView([latitude, longitude], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([latitude, longitude]).addTo(map);
}

getData();
