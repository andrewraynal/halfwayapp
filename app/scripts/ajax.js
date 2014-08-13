//add location (address)
//submit (POST)
//convert street address to longitude latitude coordinates
//GET map
//get alternate routes

$(document).ready(function() {

  myMap.init();

});

  var myMap = {
  init: function() {
      this.initStyling();
      this.initEvents();
  },
  initStyling: function() {
    
      this.renderMap();
  },
  initEvents: function() {

    $("form").on("submit", ".green", this.requestMap);
    var latlng = new google.maps.LatLng(51.764696,5.526042);
    var rendererOptions = { draggable: true };
    var addressId =  
  },
    renderMap: function(e) {

      $.ajax({
      url: "https://maps.google.com/maps/api/js?key=AIzaSyA_FaETrMKtUtLoXzDa2QM_ZkpM5Ah53Ks&sensor=false" + addressId,
      type: "GET",
      dataType: "jsonp",
      error: function(jqXHR, status, error) {
        alert("you broke the internet");
      },
      success: function(data, dataType, jqXHR) {
        calculateRoute($("#currentlocation").val(), $("#destination").val());
        var mapOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
       } 
    });
  },
    requestMap: function(e) {
     
        var newRequest = {
            currentlocation: $("#currentlocation").val(),
            destinationlocation: $("#destinationlocation").val()
        };

    $.ajax({
      url: "https://maps.google.com/maps/api/js?key=AIzaSyA_FaETrMKtUtLoXzDa2QM_ZkpM5Ah53Ks&sensor=false",
      type: "POST",
      data: newRequest, 
      error: function(jqXHR, status, error) {
        alert("couldn't add post");
      },
      success: function(data, dataType, jqXHR) {
        var currentlocation = $("#currentlocation").val("");
        var destinationlocation = $("#destinationlocation").val("")
        myMap.requestMap(); 
      }
    });
}}
      // function loadScript() {
      // var script = document.createElement('script');
      // script.type = 'text/javascript';
      // script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      // 'callback=map.Init';
      // document.body.appendChild(script);
      // }
      //     window.onload = loadScript;
      //   }
