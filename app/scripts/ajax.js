$(document).ready(function() {

  myMap.init();

});

var myMap = {
  init: function() {
    this.initStyling();
    this.initEvents();
  },
  initStyling: function() {
    
    this.renderMaps();

  },
  initEvents: function() {

    $("form").on("submit", ".green", this.requestMap);

  },
  render: function($el, template, data) {
      var tmpl = _.template(template, data);

      $el.html(tmpl);

  },
  renderMaps: function() {

    $.ajax({
      url: "http://tiy-fee-rest.herokuapp.com/collections/myBlog",
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
      'callback=initialize';
      document.body.appendChild(script);
      }
          window.onload = loadScript;
        }
      });

    },
  
  },
  requestMap: function(e) {
    e.preventDefault();

        var newRequest = {
           var latlng = {
            var streetaddress = $("#streetaddress").val();
            var city = $("#city").val();
            var state = $("#state").val();
            var zip = $("#zip");
          };
        };
    $.ajax({
      url: "https://maps.google.com/maps/api/js?key=AIzaSyA_FaETrMKtUtLoXzDa2QM_ZkpM5Ah53Ks&sensor=false",
      type: "POST",
      data: newRequest, 
      error: function(jqXHR, status, error) {
        alert("couldn't add post");
      },
      success: function(data, dataType, jqXHR) {
        $(".newPostTitle").val("");
        $(".authorPostForm").val("");
        $(".postContentForm").val(""); 
        $("#myModal").modal("hide");
        myBlog.renderMaps();
      }

};