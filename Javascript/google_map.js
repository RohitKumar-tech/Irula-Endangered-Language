function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 11.410000, lng: 76.699997}
    });

    var languages = [
        {name: "Irular", lat: 11.410000, lng: 76.699997, pop: "3500", risk: "high"},
        {name: "Kota", lat: 11.415208, lng: 76.869385, pop: "1800", risk: "low"},
        {name: "Kadar", lat: 10.166667, lng: 76.683333},
        {name: "Kanikaran, Kanikkar", lat: 8.1800, lng: 77.4100},
        {name: "Kattunayakan", lat: 11.6667, lng: 76.5833},
        {name: "Koraga", lat: 12.9141, lng: 74.8560},
        {name: "Kurichchan", lat: 11.807, lng: 76.1252},
        {name: "Kurumbas", lat: 11.407, lng: 76.7000},
        {name: "Malai Arayan", lat: 9.7000, lng: 76.8000},
        {name: "Malasar", lat: 10.2500, lng: 76.6333},
        {name: "Malayali", lat: 12.1165, lng: 78.1587},
        {name: "Mannan", lat: 9.8518, lng: 77.2489},
        {name: "Mudugar, Muduvan", lat: 10.4167, lng: 76.8833},
        {name: "Muthuvan", lat: 10.1500, lng: 76.7667},
        {name: "Palliyan", lat: 10.1500, lng: 77.3500},
        {name: "Palliyar", lat: 9.8167, lng: 77.3500},
        {name: "Paniyan", lat: 11.5000, lng: 76.5000},
        {name: "Toda", lat: 11.4064, lng: 76.6932},
        {name: "Uraly", lat: 10.1500, lng: 76.8500}
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
