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
        /**
         * Edinburgh Locations
         */
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
        },
        /**
         * Warrington Locations
         */
        // Rudy's Stockton Heath
        {
            lat: 53.370558884107346, 
            lng: -2.58139837892784
        },
        // The Maltings - Dog friendly pub
        {
            lat: 53.40063371747873, 
            lng: -2.6178934773443525 
        },
        // Warrington Market Food & Bars
        {
            lat: 53.388330100877575, 
            lng: -2.592478910643378
        },
        // Liqour Library - bar
        {
            lat: 53.38809252785066, 
            lng: -2.5952740768235567
        },
        // Las Ramblas - Tapas
        {
            lat: 53.38726797900593, 
            lng: -2.5980584442095345
        },
        /**
         * Liverpool Locations
         */
        // Love & Rockets
        {
            lat: 53.38126622669819, 
            lng: -2.9455006483904493 
        },
        // Sefton Park
        {
            lat: 53.38295309215196, 
            lng: -2.9374600617676543
        },
        // Ghetto Golf
        {
            lat: 53.394121894036516, 
            lng: -2.978672247610735
        },
        // Baltic Market
        {
            lat: 53.393452196633206, 
            lng: -2.977476040486199
        },
        /**
         * Manchester Locations
         */
        // Eastern Bloc - record shop and cafe bar
        {
            lat: 53.48280442253886, 
            lng: -2.233604217866218
        },
        // Ramona - Detroit style pizza and bar
        {
            lat: 53.48572449531742, 
            lng: -2.2344325633485367
        },
        // Mackie Mayor - market style food court and bars
        {
            lat: 53.48540873663213,
            lng: -2.2348931260030285
        },
        // Soup Kitchen - Bar and great food
        {
            lat: 53.482812123605896, 
            lng: -2.234677418352014
        },
        /**
         * MISC
         */
        // Gibraltar Farm Campsite - Morcambe Bay
        {
            lat: 54.161080, 
            lng: -2.829701
        },
        // Keswick
        {
            lat: 54.603842364910506, 
            lng: -3.134514421058662
        },
        // Hellvellyn Peak
        {
            lat: 54.5308342330631, 
            lng: -3.027988710921129
        },
        
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