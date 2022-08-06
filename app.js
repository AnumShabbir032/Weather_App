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
    let pressure_mb = document.getElementById("pressure_mb");
    let wind_dir = document.getElementById("wind_dir");
    let country = document.getElementById("country");
    let location_name = document.getElementById("location_name");
    let localtime = document.getElementById("localtime");
    axios.get(`https://api.weatherapi.com/v1/current.json?key=306540cf42a84b6d97e124622223007&q=${cityName}&aqi=no`)
        .then(function (response) {


            let weatherData = response.data;
            console.log(weatherData);

            tempF.innerHTML = `${Math.round(weatherData.current.temp_f)}

            <svg stroke="currentColor" fill="currentColor" stroke-width="0"
            viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 
            32-32 32 14.3 32 32-14.3 32-32 32zm-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5
            64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5V112zM144 448c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 
            32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 
            80zm16-125.1V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 
            48-48c0-20.9-13.4-38.5-32-45.1z"></path></svg>`

            humdity.innerHTML = ` ${weatherData.current.humidity} 

            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" 
            height="0.8em" width="0.8em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd"
            d="M8 16a6 6 0 006-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 
            5.686-6 10a6 6 0 006 6zM6.646 4.646c-.376.377-1.272 1.489-2.093 3.13l.894.448c.78-1.559 
            1.616-2.58 1.907-2.87l-.708-.708z" clip-rule="evenodd"></path></svg>`

            visibility.innerHTML = ` ${weatherData.current.vis_km}

            <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
            viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512
            186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 
            335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 
            78.8 176 176-78.8 176-176 176z"></path></svg>`

            wind.innerHTML = ` ${Math.round(weatherData.current.wind_kph)} 

            <svg stroke="currentColor" fill="currentColor" stroke-width="0" 
            viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 5.5C13 3.57 11.43 2 9.5 2 7.466 2 6.25 3.525 6.25 5h2c0-.415.388-1 
            1.25-1C10.327 4 11 4.673 11 5.5S10.327 7 9.5 7H2v2h7.5C11.43 9 13 7.43 13 5.5zM15.5
            15H8v2h7.5c.827 0 1.5.673 1.5 1.5S16.327 20 15.5 20c-.862 0-1.25-.585-1.25-1h-2c0 1.475
            1.216 3 3.25 3 1.93 0 3.5-1.57 3.5-3.5S17.43 15 15.5 15z"></path><path d="M18 5c-2.206
            0-4 1.794-4 4h2c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2H2v2h16c2.206 0 4-1.794 
            4-4S20.206 5 18 5zM2 15H6V17H2z"></path></svg>`

            pressure_mb.innerHTML = ` ${Math.round(weatherData.current.pressure_mb)}  
            <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" 
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 1.5033V3.5033L13 
            3.5033V7.6749L14.8285 5.84644L16.2427 7.26066L12 11.5033L7.75739 7.26066L9.17161 5.84644L11 
            7.67483V3.5033L6 3.5033V1.5033L18 1.5033Z" fill="currentColor"></path><path d="M18 
            20.4967V22.4967H6V20.4967H11V16.3251L9.17154 18.1536L7.75732 16.7393L12 12.4967L16.2426 
            16.7393L14.8284 18.1536L13 16.3252V20.4967H18Z" fill="currentColor"></path></svg> `

            wind_dir.innerHTML = ` ${weatherData.current.wind_dir} 
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M272 16c-32 48-38.97 
            115.99-38 176 .118 7.3 2.486 17.54 5.086 26.69 5.166-2.36 10.89-3.69 16.914-3.69 
            3.04 0 6 .346 8.857.982L272 16zm-16 217c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 
            23-23-10.19-23-23-23zm40.8 27.033c-.897 9.054-4.776 17.268-10.632 23.643L455.812 
            389.87c-25.57-51.714-80.964-91.744-133.42-120.91-6.366-3.54-16.386-6.605-25.593-8.927zm-79.896 
            8.274L40.124 362.12c57.57 3.714 119.937-24.243 171.423-55.09 6.274-3.758 13.95-10.936
            20.58-17.77-7.1-5.122-12.522-12.447-15.223-20.953zm55.86 25.07c-5.127 2.32-10.8 3.623-16.764 
            3.623-5.964 0-11.637-1.302-16.764-3.62L232 496h48l-7.236-202.623z"></path></svg> `

            country.innerHTML = weatherData.location.country;

            localtime.innerHTML = weatherData.location.localtime;

            location_name.innerHTML = weatherData.location.name;

            tempC.innerHTML = `${Math.round(weatherData.current.temp_c)}°`

            weather_icon.src = weatherData.current.condition.icon;
            weather_icon.style.display = "block";

            conditon.innerHTML = weatherData.current.condition.text;


            if (weatherData.current.condition.text == 'Clear'
                || weatherData.current.condition.text == "Overcast") {
                // document.getElementById("right").style.backgroundColor = 'red';

                document.getElementById("right").style.backgroundImage = `url('./image/day/Clear.jpg')`;

            } else if (weatherData.current.condition.text == 'Clouds' ||
                weatherData.current.condition.text == "Mist" ||
                weatherData.current.condition.text == 'Partly cloudy') {


                document.getElementById("right").style.backgroundImage = `url('./image/day/cloud2.png')`;



            } else if (weatherData.current.condition.text == 'Sunny') {

                document.getElementById("right").style.backgroundImage = `url('./image/day/sunny.jpg')`;

            }
            else if (weatherData.current.condition.textt == 'Haze'
                || weatherData.current.condition.text == 'Fog') {

                document.getElementById("right").style.backgroundImage = `url('./image/day/fog.jpg')`;


            } else if (weatherData.current.condition.text == 'Rain'
                || weatherData.current.condition.text == 'Drizzle'
                || weatherData.current.condition.text == 'Light rain shower'
                || weatherData.current.condition.text == 'Light drizzle'
                || weatherData.current.condition.text == 'Patchy rain possible') {

                document.getElementById("right").style.backgroundImage = `url('./image/day/rain (2).jpg')`;


            } else if (weatherData.current.condition.text == 'Snow') {



                document.getElementById("right").style.backgroundColor = 'black';

            } else if (weatherData.current.condition.text == 'Thunderstorm'
                || weatherData.current.condition.text == 'Patchy light rain with thunder'
                || weatherData.current.condition.text == 'Tornadoes'
                || weatherData.current.condition.text == 'Stormy'
                || weatherData.current.condition.text == 'Moderate or heavy rain with thunder') {

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