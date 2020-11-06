const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}



//crate map

const map = L.map("mapid", options).setView([-27.2235866,-49.6446164], 15);

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


// create and add marker
L.marker([-27.2235866,-49.6446164], {icon})
  .addTo(map)



  //image  gallery

  function selectImage(event) {
    console.log("cliquei no botão!");
  }
  
  
