const app = {
  item: {
    map: undefined,
    latitud: undefined,
    longitud: undefined
  },
  init: function(){
    app.item.map = new google.maps.Map($("#map")[0], {
      zoom: 5,
      center: {lat: -9.1191427, lng: -77.0349046},
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false
    });
    app.encontrar();
  },
  buscar: function(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(app.funcionExito, app.funcionError);
    }    
  },
  encontrar: function(){
    $("#encuentrame").click(app.buscar);
  },
  funcionExito: function(posicion){
    app.item.latitud = posicion.coords.latitude;
    app.item.longitud = posicion.coords.longitude;

    let miUbicacion = new google.maps.Marker({
      position: {lat: app.item.latitud, lng: app.item.longitud},
      animation: google.maps.Animation.DROP,
      map: app.item.map
      });
      app.item.map.setZoom(17);
      app.item.map.setCenter({lat: app.item.latitud, lng: app.item.longitud});     
  },
  funcionError: function(error){
    alert("Tenemos un problema para encontrar tu ubicación");
  }
}

$(document).ready(app.init);




/*function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    center: {lat: -9.1191427, lng: -77.0349046},
    mapTypeControl:false,
    zoomControl: false,
    streetViewControl:false
  });

  function buscar (){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
  }

  document.getElementById("encuentrame").addEventListener("click", buscar);
  var latitud, longitud;

  var funcionExito = function(posicion){
    latitud=posicion.coords.latitude;
    longitud=posicion.coords.longitude;

    var miUbicacion= new google.maps.Marker({
      position:{lat:latitud,lng:longitud},
      animation: google.maps.Animation.DROP,
      map:map
    });
      map.setZoom(17);
      map.setCenter({lat:latitud, lng:longitud});
  }

  var funcionError= function(error){
    alert("Tenemos un problema para encontrar tu ubicación");
  }
}
*/