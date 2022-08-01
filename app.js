// 306540cf42a84b6d97e124622223007

function getWeather() {

  let cityName = document.getElementById("cityName").value;
  let weather_icon = document.getElementById("weather_icon");
  let tempC = document.getElementById('tempC');
  let conditon = document.getElementById("conditon");
  // let tempF = document.getElementById("tempF");
  let humdity = document.getElementById("humdity");
  // let visibility = document.getElementById("visibility");
  // let wind = document.getElementById("wind");
  // let feelslike_c = document.getElementById("feelslike_c");
  // let feelslike_f = document.getElementById("feelslike_f");
  axios.get(`https://api.weatherapi.com/v1/current.json?key=306540cf42a84b6d97e124622223007&q=${cityName}&aqi=no
`)
    .then(function (response) {


      let weatherData = response.data;
      console.log(weatherData);
      // console.log("humdity" + weatherData.current.humidity);
      // console.log("temp F" + weatherData.current.temp_f);
      // console.log("visibility" + weatherData.current.vis_km);
      // console.log("wind speed" + weatherData.current.wind_kph);

      // console.log("feelslike_c" + weatherData.current.feelslike_c);
      // console.log("feelslike_f" + weatherData.current.feelslike_f);

      document.getElementById("tempF").innerHTML = `${Math.round(weatherData.current.temp_f)} °F `
      document.getElementById("humdity").innerHTML = ` ${weatherData.current.humidity}  <br/> Humidity`
      document.getElementById("visibility").innerHTML = ` ${weatherData.current.vis_km}  <br/> Visibility/km`
      document.getElementById("wind").innerHTML = ` ${Math.round(weatherData.current.wind_kph)}  <br/> Wind/kph`
      document.getElementById("feelslike_c").innerHTML = ` ${Math.round(weatherData.current.feelslike_c)}  <br/> Feelslike_°C`
      document.getElementById("feelslike_f").innerHTML = ` ${Math.round(weatherData.current.feelslike_f)}  <br/> Feelslike_°F`




      document.getElementById("country").innerHTML = weatherData.location.country
      document.getElementById("location_name").innerHTML = weatherData.location.name

      document.getElementById('tempC').innerHTML = Math.round(weatherData.current.temp_c) + "°C"
      document.getElementById("weather_icon").src = weatherData.current.condition.icon
      weather_icon.style.display = "block";
      document.getElementById("conditon").innerHTML = weatherData.current.condition.text;



      console.log("country" + weatherData.location.country);
      // console.log("region" + weatherData.location.region);
      console.log("locationname" + weatherData.location.name);
      // console.log("location" + weatherData.location.localtime);


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

}