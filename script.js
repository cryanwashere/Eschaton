// script.js

// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 5);

const mapLinks = {
    openstreet: {
        link: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    topomap: {
        link: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        attribution: '© OpenTopoMap contributors'
    },
    esri: {
        link: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
        attribution: '© Esri'
    },
    landscape: {
        link: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=8bd58485631549de81382e379145d0ad',
        attribution: 'Thunderforest'
    },
    outdoors: {
        link: 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=8bd58485631549de81382e379145d0ad',
        attribution: 'Thunderforest'
    },
    pioneer: {
        link: 'https://tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey=8bd58485631549de81382e379145d0ad',
        attribution: 'Thunderforest'
    },
    mobile_atlas: {
        link: 'https://tile.thunderforest.com/atlas/{z}/{x}/{y}.png?apikey=8bd58485631549de81382e379145d0ad',
        attribution: 'Thunderforest'
    }


}



L.tileLayer(mapLinks.mobile_atlas.link, {
    attribution: mapLinks.outdoors.attribution
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();


//Draw some country borders
fetch('world-administrative-boundaries.geojson').then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response as JSON
      return response.json();
})
.then(geoJsonData => {
    

    
    



})