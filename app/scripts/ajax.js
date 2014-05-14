$(document).ready(function() {

  myMap.init();

});

var myMap = {
  init: function() {
    myMap.initEvents();
    myMap.initStyling();
  },

  initEvents: function() {

    $(form).on("submit", ".green", function() {(
//add location (address)
//submit (POST)
//convert street address to longitude latitude coordinates
///GET map

    requestMap: function(e) {
      e.preventDefault();

        var newRequest = {
            var streetaddress = $("#streetaddress").val();
            var city = $("#city").val();
            var state = $("#state").val();
            var zip = $("#zip").val();
        };
    $.ajax({
      url: "https://maps.google.com/maps/api/js?key=AIzaSyA_FaETrMKtUtLoXzDa2QM_ZkpM5Ah53Ks&sensor=false",
      type: "POST",
      data: newRequest, 
      error: function(jqXHR, status, error) {
        alert("couldn't add post");
      },
      success: function(data, dataType, jqXHR) {
        $("#streetaddress").val();
        $("#city").val();
        $("#state").val(); 
        $("#zip").val();
        myMap.requestMap(); 
      };
    )}
                    }
  initStyling: function() {
    renderMaps: function() {

    $.ajax({
      url: "https://maps.google.com/maps/api/js?key=AIzaSyA_FaETrMKtUtLoXzDa2QM_ZkpM5Ah53Ks&sensor=false",
      type: "GET",
      dataType: "json",
      error: function(jqXHR, status, error) {
        alert("you broke the goddamn internet");
      },
      success: function(data, dataType, jqXHR) {
        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(-34.397, 150.644)
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
        }

      function loadScript() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=map.Init';
      document.body.appendChild(script);
      }
          window.onload = loadScript;
        }
      });    
  },