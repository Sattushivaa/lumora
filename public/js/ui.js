let arr = document.querySelectorAll("menu li ul");
arr.forEach(el => {
    el.addEventListener("click", e => {
        document.querySelector("menu li ul.active").classList.remove("active");
        el.classList.add("active");
    })
});

var myAPIKey = "7fa7187c3cfa43fa80ef153a13130829";

var map = new maplibregl.Map({
  container: 'map',
  style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${myAPIKey}`,
});
map.addControl(new maplibregl.NavigationControl());

map.on('load', () => {
    map.setPaintProperty('highway-motorway', 'line-width', {"base":1.2,"stops":[[6.5,0],[7,1.25],[20,45]]});
});