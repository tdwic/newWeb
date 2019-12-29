
function initMap() {
  var uluru = {lat: 7.0728485, lng: 79.8926752};
  var map = new google.maps.Map(
      document.getElementById('location-box'), {zoom: 15, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}
