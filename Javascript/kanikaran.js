function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: {lat: 11.410000, lng: 76.699997}
    });

    var languages = [
        {name: "kanikaran", lat: 8.1800, lng: 77.4100}
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

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
}

google.maps.event.addDomListener(window, 'load', initMap);
