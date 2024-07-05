$(document).ready(function () {
    console.log("info-leaflet.js loaded");

    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');

    if (id) {
        $.ajax({
            url: "assets/db/items.json",
            dataType: "json",
            method: "GET",
            cache: false,
            success: function (results) {
                console.log("Data fetched successfully");
                var item = results.find(item => item.id == id);
                if (item) {
                    console.log("Item found:", item);
                    $('#title').text(item.title);
                    $('#price').text(item.price);
                    $('#address').text(item.address);
                    $('#phone').text(item.phone);
                    $('#email').text(item.email);

                    // Map initialization
                    var mapElement = $('#map');
                    var mapDefaultZoom = parseInt(mapElement.attr('data-ts-map-zoom'), 10);
                    var centerLatitude = item.latitude;
                    var centerLongitude = item.longitude;
                    var leafletMapProvider = mapElement.attr('data-ts-map-leaflet-provider');
                    var leafletAttribution = mapElement.attr('data-ts-map-leaflet-attribution');
                    var zoomPosition = mapElement.attr('data-ts-map-zoom-position');
                    var scrollWheel = parseInt(mapElement.attr('data-ts-map-scroll-wheel'), 10);

                    console.log("Map settings:", {
                        mapDefaultZoom,
                        centerLatitude,
                        centerLongitude,
                        leafletMapProvider,
                        leafletAttribution,
                        zoomPosition,
                        scrollWheel
                    });

                    var map = L.map('map', {
                        zoomControl: false,
                        scrollWheelZoom: scrollWheel
                    }).setView([centerLatitude, centerLongitude], mapDefaultZoom);

                    L.tileLayer(leafletMapProvider, {
                        attribution: leafletAttribution
                    }).addTo(map);

                    if (zoomPosition) {
                        L.control.zoom({ position: zoomPosition }).addTo(map);
                    } else {
                        L.control.zoom({ position: "topright" }).addTo(map);
                    }

                    var customIcon = L.icon({
                        iconUrl: 'assets/css/images/marker-icon.png', // Update with your custom marker icon path
                        iconSize: [41, 41], // size of the icon
                        iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
                        popupAnchor: [0, -41] // point from which the popup should open relative to the iconAnchor
                    });

                    L.marker([centerLatitude, centerLongitude], { icon: customIcon }).addTo(map);
                } else {
                    console.log("Item not found");
                }
            },
            error: function (e) {
                console.log("Error fetching data", e);
            }
        });
    } else {
        console.log("No ID parameter found in URL");
    }
});
