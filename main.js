/*
    ============
    MAPBOX LOGIC
    ============
*/

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2xheW5lIiwiYSI6ImNsa2lzZ2dlYjBkNmwzZm9hY3VyMTBuanUifQ.hBUlDyGnCEG28_Mt-DPT7g';
const map = new mapboxgl.Map({
  container: 'map',
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-74.01661, 40.71193],
  zoom: 13,
});

// Add the control to the map.
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);

map.addControl(
  new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  }),
  'top-left'
);
