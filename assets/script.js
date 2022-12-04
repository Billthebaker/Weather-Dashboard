var searchBtn = document.getElementById('button');
var humidEl = document.getElementById('humidity');
var windEl = document.getElementById('wind');
var tempEl= document.getElementById('temperature');



function callApi(location){
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + location + '&appid=4dacd660c3a2d3652f3f05fffb1b0e8d&units=imperial'
fetch(requestUrl)
  .then(function (response) {
    return response.json()
}).then(function(data) {
  console.log(data)
  tempEl.textContent= data.list[0].main.temp
  windEl.textContent= data.list[0].wind.speed
  humidEl.textContent= data.list[0].main.humidity
});

}

function getWeather(event){
  event.preventDefault()
  console.log(
    'hello world'
  )
  var locEl = $('#location')
  var location = locEl.val()
  console.log(location)
  callApi(location);

}
searchBtn.addEventListener('click',getWeather)