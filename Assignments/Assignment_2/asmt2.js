$(document).ready(function(){

  

  var APIXkey = 'ad1e25b429334cfdae1200126182103';

  //weather url
  $("#weather").hide();

  //Getter function for grabbing long and lat input
  //100624373
  //EL1R3M7

  $('#goButton').click(function() {
    
    var latitude = $('#lat').val();
    var longitude = $('#lon').val();
    downloadWeather(latitude,longitude);

  });



function downloadWeather(lat,long){
  


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
    $('#weather ul').append('<li>:Humidity ' + data.current.humidity + '%</li>');                                         //humidity
    $('#weather ul').append('<li>Pressure: ' + data.current.pressure_mb + 'mb</li>');                             //pressure

    $('#weather ul').append('<li><h3>Wind</h3></li>');
    
    $('#weather ul').append('<li>Direction: ' + data.current.wind_dir + '</li>');                             //Direction    
    $('#weather ul').append('<li>Speed: ' + data.current.wind_kph + 'km/h</li>');                              //Speed


    $("#weather").show();



  });
}

});