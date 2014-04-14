(function(){

  var map = new GMaps({
    div: '#map',
    zoom: 12,
    scrollwheel: false,
    lat: -22.935,
    lng: -43.15
  });
  map.addMarker({
    lat: -22.896675,
    lng: -43.125275,
    title: "UFF",
    infoWindow: {
      content: "<p>UFF</p>"
    }
  });
  map.addMarker({
    lat: -22.965387,
    lng: -43.237697,
    title: "Impa",
    infoWindow: {
      content: "<p>Impa</p>"
    }
  });
  map.addMarker({
    lat: -22.859664,
    lng: -43.229913,
    title: "UFRJ",
    infoWindow: {
      content: "<p>UFRJ</p>"
    }
  });

})();
