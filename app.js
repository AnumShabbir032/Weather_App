// 306540cf42a84b6d97e124622223007

function getWeather() {

    let cityName = document.getElementById("cityName").value;
    //   let error = document.getElementById("error");
    let weather_icon = document.getElementById("weather_icon");
    let tempC = document.getElementById('tempC');
    let conditon = document.getElementById("conditon");
    let tempF = document.getElementById("tempF");
    let humdity = document.getElementById("humdity");
    let visibility = document.getElementById("visibility");
    let wind = document.getElementById("wind");
    let feelslike_c = document.getElementById("feelslike_c");
    let feelslike_f = document.getElementById("feelslike_f");
    let country = document.getElementById("country");
    let location_name = document.getElementById("location_name");
    let localtime = document.getElementById("localtime");
    axios.get(`https://api.weatherapi.com/v1/current.json?key=306540cf42a84b6d97e124622223007&q=${cityName}&aqi=no`)
        .then(function (response) {


            let weatherData = response.data;
            console.log(weatherData);

            tempF.innerHTML = `${Math.round(weatherData.current.temp_f)}  <br/> `

            humdity.innerHTML = ` ${weatherData.current.humidity}  <br/> `

            visibility.innerHTML = ` ${weatherData.current.vis_km}  <br/> `

            wind.innerHTML = ` ${Math.round(weatherData.current.wind_kph)}  <br/> `

            feelslike_c.innerHTML = ` ${Math.round(weatherData.current.feelslike_c)}  <br/> `

            feelslike_f.innerHTML = ` ${Math.round(weatherData.current.feelslike_f)}  <br/> `

            country.innerHTML = weatherData.location.country;

            localtime.innerHTML = weatherData.location.localtime;

            location_name.innerHTML = weatherData.location.name;

            tempC.innerHTML = `${Math.round(weatherData.current.temp_c)}°`

            weather_icon.src = weatherData.current.condition.icon;
            weather_icon.style.display = "block";

            conditon.innerHTML = weatherData.current.condition.text;


            if (weatherData.current.condition.text == 'Clear' || weatherData.current.condition.text == "Overcast") {
                document.getElementById("right").style.backgroundColor = `url('./image/day/Clear.jpg')`;

            } else if (weatherData.current.condition.text == 'Clouds' || weatherData.current.condition.text == 'Partially cloudy' || weatherData.current.condition.text == 'Partly cloudy') {

                document.getElementById("right").style.backgroundImage = `url('./image/day/cloud2.png')`;

                // document.getElementsByClassName("main").style.backgroundImage = `url('./image/day/cloud2.png')`;

            } else if (weatherData.current.condition.text == 'Sunny') {

                document.getElementById("right").style.backgroundImage = `url('./image/day/sunny.jpg')`;

            }
            else if (weatherData.current.condition.textt == 'Haze' || weatherData.current.condition.text == 'Fog') {

                document.getElementById("right").style.backgroundImage = `url('./image/day/fog.jpg')`;

            } else if (weatherData.current.condition.text == 'Rain' || weatherData.current.condition.text == 'Drizzle' || weatherData.current.condition.text == 'Light rain shower' || weatherData.current.condition.text ==  'Light drizzle') {

                document.getElementById("right").style.backgroundImage = `url('./image/day/rain (2).jpg')`;

            } else if (weatherData.current.condition.text == 'Snow') {

                document.body.style.backgroundImage = "url('images/snow.jpg')";

            } else if (weatherData.current.condition.text == 'Thunderstorm' || weatherData.current.condition.text == 'Tornadoes' || weatherData.current.condition.text == 'Stormy') {

                document.getElementById("right").style.backgroundImage = `url('./image/day/strom.jpg')`

            }

            let date = document.getElementById('date');
            let todayDate = new Date();
            date.innerText = dateManage(todayDate);


            // Date manage
            function dateManage(dateArg) {

                let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

                let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                let year = dateArg.getFullYear();
                let month = months[dateArg.getMonth()];
                let date = dateArg.getDate();
                let day = days[dateArg.getDay()];

                return `${day} ${date}-${month}-${year}`;
            }







        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}