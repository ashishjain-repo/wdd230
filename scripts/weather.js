const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.8231096&lon=-111.7924237&appid=a32d3f19e87569839e90fd40ae6a9a14&units=metric';

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function getWeather()
{
    try{   
        const response = await fetch(url);
        if(response.ok)
        {
            const data = await response.json();
            console.log(data);
            var weather = document.getElementById('current-temp');
            weather.innerText = data.main.temp;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
            var icon = document.getElementById('weather-icon');
            icon.src = iconUrl;
            var desc = document.getElementById('figcaption');
            desc.textContent= data.weather[0].description;
        }
        else
        {
            throw Error(await response.text());
        }
    }
    catch(error)
    {
        console.log(error);
    }
}

getWeather();