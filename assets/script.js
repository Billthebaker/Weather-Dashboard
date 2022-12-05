var searchBtn = document.getElementById('button');
var humidEl = document.getElementById('humidity');
var windEl = document.getElementById('wind');
var tempEl= document.getElementById('temperature');
var temp1 = document.getElementById('temperature-0');
var temp2 = document.getElementById('temperature-1');
var temp3 = document.getElementById('temperature-2');
var temp4 = document.getElementById('temperature-3');
var temp5 = document.getElementById('temperature-4');
var hum1 = document.getElementById('humidity-0');
var hum2 = document.getElementById('humidity-1');
var hum3 = document.getElementById('humidity-2');
var hum4 = document.getElementById('humidity-3');
var hum5 = document.getElementById('humidity-4');
var wind1 = document.getElementById('wind-0');
var wind2 = document.getElementById('wind-1');
var wind3 = document.getElementById('wind-2');
var wind4 = document.getElementById('wind-3');
var wind5 = document.getElementById('wind-4');





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
  temp1.textContent= data.list[1].main.temp
  temp2.textContent= data.list[2].main.temp
  temp3.textContent= data.list[3].main.temp
  temp4.textContent= data.list[4].main.temp
  temp5.textContent= data.list[5].main.temp
  hum1.textContent = data.list[1].main.humidity
  hum2.textContent = data.list[2].main.humidity
  hum3.textContent = data.list[3].main.humidity
  hum4.textContent = data.list[4].main.humidity
  hum5.textContent = data.list[5].main.humidity
  wind1.textContent = data.list[1].wind.speed
  wind2.textContent = data.list[2].wind.speed
  wind3.textContent = data.list[3].wind.speed
  wind4.textContent = data.list[4].wind.speed
  wind5.textContent = data.list[5].wind.speed
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