
// function writeAddressName(latLng) {
// var addressInput = new google.maps.LatLng();
//   var geocoder = new google.maps.Geocoder();
//   geocoder.geocode({
//     "location": latLng
//   },

//   function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK)
//       document.getElementById("address").innerHTML = results[0].formatted_address;
//     else
//       document.getElementById("error").innerHTML += "Unable to retrieve your address"  + "<br />";
//   });
// }

// function geolocationSuccess(position){
// var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
// writeAddressName(userLatLng);

// var myOptions = {
//   zoom : 16,
//   center : userLatLng,
//   mapTypeId : google.maps.MapTypeId.ROADMAP
// };

// var mapObject = new google.maps.Map(document.getElementById("mapsgohere"), myOptions);

// new google.maps.Marker({
// 	map: mapObject, 
// 	position: userLatLng 
// });

// var circle = new google.maps.Circle({
//   center: userLatLng,
//   radius: position.coords.accuracy,
//   map: mapObject,
//   fillColor: '#0000FF',
//   fillOpacity: 0.5,
//   strokeColor: '#0000FF',
//   strokeOpacity: 1.0
// });
// mapObject.fitBounds(circle.getBounds());
// }

// function geolocationError(positionError) {
//         document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
//       }
 
//       function geolocateUser() {
        
//         if (navigator.geolocation)
//         {
//           var positionOptions = {
//             enableHighAccuracy: true,
//             timeout: 10 * 1000 // 10 seconds
//           };
//           navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
//         }
//         else
//           document.getElementById("error").innerHTML += "Your browser doesn't support the Geolocation API";
//       }
//  window.onload = geolocateUser;


function success(position) {
  var s = document.querySelector("#status");
  
  if (s.className == "success:") {
    // not sure why we're hitting this twice in FF, I think it's to do with a cached result coming back    
    return;
  }
  
  s.innerHTML = "found you!";
  s.className = "success";
 
  var mapcanvas = document.createElement("div");
  mapcanvas.id = "mapcanvas";
  mapcanvas.style.height = "400px";
  mapcanvas.style.width = "560px";
    
  document.querySelector("mapsgohere").appendChild(mapcanvas);
 
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: false,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
  
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


//yayayayayayaayay//