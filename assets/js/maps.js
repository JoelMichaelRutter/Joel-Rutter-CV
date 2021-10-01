function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        // Civerinos Slice
        {
            lat: 55.945541,
            lng: -3.191302
        },
        // Devil's Advocate
        {
            lat: 55.950293,
            lng: -3.191580
        },
        // Princes Street Gardens
        {
            lat: 55.949664,
            lng: -3.197989
        },
        // Urban Angel
        {
            lat: 55.954766,
            lng: -3.197732
        },
        // Wellington Coffee
        {
            lat: 55.953616,
            lng: -3.197574
        }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
};