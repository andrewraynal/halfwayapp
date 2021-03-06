var s = document.querySelector("#status");
  
  if (s.className == "success:") {
    
    return;
  }
  
  s.innerHTML = "found you!";
  s.className = "success";
 
  var mapcanvas = document.createElement("div");
  mapcanvas.id = "mapcanvas";
  mapcanvas.style.height = "400px";
  mapcanvas.style.width = "400px";

  document.querySelector("putmaphere").appendChild(mapcanvas);
 
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapimg"), myOptions);
  
  var marker = new google.maps.Marker({
      position: latlng, 
      map: map, 
      title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
  });
}

function error(msg) {
  var s = document.querySelector("#status");
  s.innerHTML = typeof msg == "string" ? msg : "failed";
  s.className = "fail";
  
  // console.log(arguments);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error("not supported");
}