// Create the map
var map = L.map('map').setView([40, -74], 4);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(map);

// Load the language data
var languageData = [
  {
    "name": "Kota",
    "latitude": 11.415208,
    "longitude": 76.869385,
    "speakers": 2015,
    "endangerment": "vulnerable"
  },
  {
    "name": "Irular",
    "latitude": 11.410000,
    "longitude": 76.699997,
    "speakers": 1000,
    "endangerment": "critically endangered"
  },
  // Add more language data here
];

// Create a marker for each language
languageData.forEach(function(language) {
  var marker = L.marker([language.latitude, language.longitude]).addTo(map);
  marker.bindPopup("<b>" + language.name + "</b><br>Speakers: " + language.speakers + "<br>Endangerment: " + language.endangerment);
});