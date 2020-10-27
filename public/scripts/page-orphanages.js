//crate map

const map = L.map("mapid").setView([-27.2235866,-49.6446164], 15);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);

//create icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})

//create popup overlay

const popup = L.popup({
    closeButton: false,
    className: "map-popup"
})


// create and add marker
L.marker([-27.2235866,-49.6446164])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
