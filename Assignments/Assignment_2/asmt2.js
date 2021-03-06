$(document).ready(function(){
  //weather url
  $("#weather").hide();

  //Getter function for grabbing long and lat input
  //Christien Soosipillai - 100624373
  //Miral Panchal - 100569725

  $('#goButton').click(function() {
    lat = $('#lat').val();
    long = $('#lon').val();
    downloadWeather();
    downloadForcast();
    showMap();
  });



function downloadWeather(){
  var APIXkey = 'ad1e25b429334cfdae1200126182103';
  var urlWeather = "http://api.apixu.com/v1/forecast.json?q=" + lat + "," + long + '&key=' + APIXkey;
  console.log(urlWeather);
  $.getJSON(urlWeather, function(data) {
    //Remove all list elements so we dont keep adding onto previous list
    $('#weather ul').remove();

    $('#weather').append('<ul></ul>');

    $('#weather ul').append('<li><h3>Temperature</h3></li>');

    $('#weather ul').append('<li>Current: ' + data.current.temp_c + '&deg;C</li>');                              //temperature
    $('#weather ul').append('<li>Low: ' + data.forecast.forecastday[0].day.mintemp_c + '&deg;C</li>');           //min temp
    $('#weather ul').append('<li>High: ' + data.forecast.forecastday[0].day.maxtemp_c + '&deg;C</li>');          //max temp
    $('#weather ul').append('<li>Feels like: ' + data.current.feelslike_c + '&deg;C</li>');                      //feels Like

    $('#weather ul').append('<li><h3>Condition</h3></li>');

    $('#weather ul').append('<li>Description: ' + data.current.condition.text + '&deg;C</li>');                   //description
    $('#weather ul').append('<li>Cloud cover: ' + data.current.cloud + '%</li>');                                 //cloud cover
    $('#weather ul').append('<li>Humidity: ' + data.current.humidity + '%</li>');                                         //humidity
    $('#weather ul').append('<li>Pressure: ' + data.current.pressure_mb + 'mb</li>');                             //pressure

    $('#weather ul').append('<li><h3>Wind</h3></li>');

    $('#weather ul').append('<li>Direction: ' + data.current.wind_dir + '</li>');                             //Direction
    $('#weather ul').append('<li>Speed: ' + data.current.wind_kph + 'km/h</li>');                              //Speed

    $("#weather").show();
  });
}

function downloadForcast(){
  var APIYKey = '62a916ba22594820b02215016181903';
  var urlForcast = 'http://api.apixu.com/v1/forecast.json?q=' + lat+ ',' + lon + '&days=7&key=' + APIYKey;

  $('#forecast').append('<h2>Forecast:</h2>');
  $('#forecast').append('<table class= "table table-striped"> <thead> <tr> <th>Date</th> <th>Condition</th> <th>High</th> <th>Low</th> <th>Wind</th> <th>Outlook</th> </tr> </thead> <tbody>');

  $.getJSON(urlForcast, function(data){
     for(var i = 0; i < data.forecast.forecastday.length; i++) {
       $('tbody').append('<tr> <td>'+ data.forecast.forecastday[i].date + '</td> <td><img src = ' +
       'http:' + data.forecast.forecastday[i].day.condition.icon + '></img></td> <td>' +
       data.forecast.forecastday[i].day.maxtemp_c + '&deg;C</td> <td>' +
       data.forecast.forecastday[i].day.mintemp_c + '&deg;C</td> <td>'+
       data.forecast.forecastday[i].day.avgvis_km + 'km/h</td> <td>'+
       data.forecast.forecastday[i].day.condition.text + '</td> </tr>');
     }
  });
  $('#forecast').append('</tbody></table>');
}

function showMap() {
  var uluru = {lat: parseFloat(lat), lng: parseFloat(long)};
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
  google.maps.event.trigger(map, 'resize')
}

});
