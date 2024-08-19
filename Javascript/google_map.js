function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 11.410000, lng: 76.699997}
    });

    var languages = [
        {name: "Irular", lat: 11.410000, lng: 76.699997, pop: "2,33,000", risk: "low"},
        {name: "Kota", lat: 11.415208, lng: 76.869385, pop: "200", risk: "high"},
        {name: "Kadar", lat: 10.166667, lng: 76.683333 , pop: "1,700" , risk:"high"},
        {name: "Kanikaran, Kanikkar", lat: 8.1800, lng: 77.4100 , pop: "1,000" , risk:"high"},
        {name: "Kattunayakan", lat: 11.6667, lng: 76.5833 , pop: "72,000" , risk : "low"},
        {name: "Koraga", lat: 12.9141, lng: 74.8560 , pop: "50" , risk : "high"},
        {name: "Kurichchan", lat: 11.807, lng: 76.1252 , pop: "25,000" , risk : "low"},
        {name: "Kurumbas", lat: 11.407, lng: 76.7000 , pop: "283,000" , risk : "low"},
        {name: "Malai Arayan", lat: 9.7000, lng: 76.8000 , pop:"2,20,000" , risk: "low"},
        {name: "Malasar", lat: 10.2500, lng: 76.6333 , pop: "3,500" , risk : "high"},
        {name: "Malayali", lat: 12.1165, lng: 78.1587 , pop: "" , risk : ""},
        {name: "Mannan", lat: 9.8518, lng: 77.2489, pop: "" , risk : ""},
        {name: "Mudugar, Muduvan", lat: 10.4167, lng: 76.8833, pop: "" , risk : ""},
        {name: "Muthuvan", lat: 10.1500, lng: 76.7667, pop: "" , risk : ""},
        {name: "Palliyan", lat: 10.1500, lng: 77.3500, pop: "" , risk : ""},
        {name: "Palliyar", lat: 9.8167, lng: 77.3500, pop: "" , risk : ""},
        {name: "Paniyan", lat: 11.5000, lng: 76.5000, pop: "" , risk : ""},
        {name: "Toda", lat: 11.4064, lng: 76.6932, pop: "" , risk : ""},
        {name: "Uraly", lat: 10.1500, lng: 76.8500, pop: "" , risk : ""}
    ];

    languages.forEach(function(language) {
        var marker = new google.maps.Marker({
            position: {lat: language.lat, lng: language.lng},
            map: map,
            title: language.name,
            icon: language.risk ? {
                url: "http://maps.google.com/mapfiles/ms/icons/" + (language.risk === "high" ? "red-dot.png" : "green-dot.png")
            } : null
        });

        var contentString = '<div><a href="../Languages/' + language.name.toLowerCase().replace(/[^a-z]+/g, '-') + '/' + language.name.toLowerCase().replace(/[^a-z]+/g, '-') + '.html" style="text-decoration: underline; font-weight: bolder; font-size: larger;">' + language.name + '</a><br>' +
                            (language.risk ? 'Risk: ' + language.risk + '<br>' : '') +
                            (language.pop ? 'Population: ' + language.pop : '') +
                            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
