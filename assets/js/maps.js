window.onload = function() {
   initialize();
};

function initialize() {
   var myLatlng = new google.maps.LatLng(48.8569411432502, 2.4257469269836065);

   var myOptions = {
       zoom: 16,
       center: myLatlng,
       mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   var map = new google.maps.Map(document.getElementById("map"), myOptions);

   var infowindow = new google.maps.InfoWindow({
       content: ""
   });

   var marker = new google.maps.Marker({
       position: myLatlng,
       map: map,
       title: "Palais des congrès de Montreuil"
   });

   google.maps.event.addListener(marker, 'click', function() {
       infowindow.open(map,marker);
   });
}
