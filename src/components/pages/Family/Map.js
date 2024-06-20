import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import Data from '../../../assets/db/items.json';

const FamilyMap = () => {
  useEffect(() => {
    const iframe = document.getElementById('mapIframe');
    const initializeMap = () => {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const mapContainer = iframeDoc.getElementById('ts-map-hero');
      const resultsWrapper = iframeDoc.getElementById('results-wrapper');
      if (mapContainer && !iframeDoc.getElementById('mapInitialized')) {
        const latitude = parseFloat(mapContainer.getAttribute('data-ts-map-center-latitude'));
        const longitude = parseFloat(mapContainer.getAttribute('data-ts-map-center-longitude'));
        const zoom = parseInt(mapContainer.getAttribute('data-ts-map-zoom'));

        const map = L.map(mapContainer, {
          center: [latitude, longitude],
          zoom: zoom,
          scrollWheelZoom: true, // Enable scroll wheel zoom
          dragging: true // Enable dragging
        });

        L.tileLayer(mapContainer.getAttribute('data-ts-map-leaflet-provider'), {
          attribution: mapContainer.getAttribute('data-ts-map-leaflet-attribution')
        }).addTo(map);

        const markers = L.markerClusterGroup();
        Data.forEach(point => {
          const marker = L.marker([point.latitude, point.longitude], {
            icon: L.divIcon({
              className: 'leaflet-marker-icon leaflet-div-icon leaflet-zoom-animated leaflet-interactive',
              html: `
                <div class="ts-marker-wrapper">
                  <a href="#" class="ts-marker" data-ts-id="${point.id}" data-ts-ln="${point.id}" style="outline: none;">
                    <div class="ts-marker__title">${point.title}</div>
                    <div class="ts-marker__image ts-black-gradient" style="background-image: url(${point.marker_image})"></div>
                  </a>
                </div>
              `,
              iconSize: [42, 47]
            })
          });

          const popupContent = `
            <div class="infobox-wrapper ts-show">
              <div class="ts-infobox" data-ts-id="${point.id}">
                <img src="assets/img/infobox-close.svg" class="ts-close">
                <a href="${point.url}" class="ts-infobox__wrapper ts-black-gradient">
                  <div class="ts-infobox__content">
                    <figure class="ts-item__info">
                      <h4>${point.title}</h4>
                      <aside><i class="fa fa-map-marker mr-2"></i>${point.address}</aside>
                    </figure>
                    <div class="ts-description-lists">
                      <dl><dt>Website</dt><dd>${point.website}</dd></dl>
                      <dl><dt>Phone</dt><dd>${point.phone}</dd></dl>
                      <dl><dt>Email</dt><dd>${point.email}</dd></dl>
                      <dl><dt>Hours</dt><dd>${point.hours}</dd></dl>
                    </div>
                  </div>
                  <div class="ts-infobox_image" style="background-image: url(${point.marker_image})"></div>
                </a>
              </div>
            </div>
          `;

          marker.bindPopup(L.popup({ closeButton: false }).setContent(popupContent));

          marker.on('popupopen', function () {
            const popupNode = marker.getPopup().getElement();
            const closeButton = popupNode.querySelector('.ts-close');
            closeButton.addEventListener('click', function () {
              marker.closePopup();
            });
          });

          markers.addLayer(marker);

          // Add item to results wrapper
          const resultItem = `
            <div class="ts-result-link" data-ts-id="${point.id}" data-ts-ln="${point.id}">
              <span class="ts-center-marker"><img src="assets/img/result-center.svg"></span>
              <a href="${point.url}" class="card ts-item ts-card ts-result">
                <div class="card-img ts-item__image" style="background-image: url(${point.marker_image})"></div>
                <div class="card-body">
                  <figure class="ts-item__info">
                    <h4>${point.title}</h4>
                    <aside><i class="fa fa-map-marker mr-2"></i>${point.address}</aside>
                  </figure>
                  <div class="ts-description-lists">
                    <dl><dt>Website</dt><dd>${point.website}</dd></dl>
                    <dl><dt>Phone</dt><dd>${point.phone}</dd></dl>
                    <dl><dt>Email</dt><dd>${point.email}</dd></dl>
                    <dl><dt>Hours</dt><dd>${point.hours}</dd></dl>
                  </div>
                </div>
                <div class="card-footer">
                  <span class="ts-btn-arrow">Detail</span>
                </div>
              </a>
            </div>
          `;
          resultsWrapper.innerHTML += resultItem;
        });

        map.addLayer(markers);

        // Mark map as initialized
        const marker = iframeDoc.createElement('div');
        marker.id = 'mapInitialized';
        iframeDoc.body.appendChild(marker);
      }
    };

    if (iframe) {
      if (iframe.contentWindow.document.readyState === 'complete') {
        initializeMap();
      } else {
        iframe.onload = initializeMap;
      }
    }
    return () => {
      if (iframe) {
        iframe.onload = null;
      }
    };
  }, []);

  return (
    <div className="ts-page-wrapper ts-homepage ts-full-screen-page" id="page-top">
      <iframe
        id="mapIframe"
        src="/map-template.html"
        title="Map Template"
        style={{ width: '100%', height: '100vh', border: 'none' }}
      ></iframe>
    </div>
  );
};

export default FamilyMap;
