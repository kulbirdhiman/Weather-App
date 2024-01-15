import React, { useState, useEffect } from 'react';
import { FaTemperatureLow, FaCloud, FaSun, FaCloudSun, FaCloudRain, FaSnowflake } from 'react-icons/fa';

import axios from 'axios';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    'https://api.openweathermap.org/data/2.5/weather?q=Amritsar&appid=5d337259a03c4f16924e8b8d8c764ce4'
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [weatherData]);

    function kelvinToCelsius(kelvin) {
        return kelvin - 273.15;
    }
    console.log(weatherData && weatherData.main.temp)
    let temperature = null;
    if (weatherData) {
        temperature = kelvinToCelsius(weatherData.main.temp).toFixed(2); // Adjusted temperature conversion
    }

    let time = new Date().toDateString();

    const getBackgroundImage = () => {
        if (weatherData) {
            const weatherDescription = weatherData.weather[0].description.toLowerCase();
            if (weatherDescription.includes('clear')) {
                return 'clear';
            } else if (weatherDescription.includes('cloud') || weatherDescription.includes('rain') || weatherDescription.includes('drizle') || weatherDescription.includes('mist') || weatherDescription.includes('fog')) {
                return 'cloud';
            } else {
                return 'def';
            }
        }

        return 'def';
    };
    // change incons
    const getIcon = () => {
        if (weatherData) {
            const weatherDescription = weatherData.weather[0].description.toLowerCase();
            console.log(weatherDescription)

            if (weatherDescription.includes('clear')) {
                return <FaSun />;
            } else if (weatherDescription.includes('cloud')) {
                return <FaCloudSun />;
            } else if (weatherDescription.includes('rain')) {
                return <FaCloudRain />;
            } else if (weatherDescription.includes('snow')) {
                return <FaSnowflake />;
            } else {
                return <FaCloud />;
            }
        }

        return <FaCloud />;
    };
    return (
        <section className={getBackgroundImage()}>
            <div className="wrap py-7">
                <h1 className="logo">Weatherme</h1>
                <div className="main-card p-3 adj-w">
                    <h2 className="ms-5 text-white mt-3">{weatherData && weatherData.name}</h2>
                    <div className="mt-4 p-5 text-center">
                        <h1>

                            <FaTemperatureLow />  {temperature} °C {getIcon()}

                        </h1>
                    </div>
                    <p>{time}</p>
                    <div className="d-flex">
                        <div className="text-center">
                            <p>Humidity</p>
                            {weatherData && <p>{weatherData.main.humidity}%</p>}
                        </div>
                        <div className="text-center">
                            <p>Visibility</p>
                            {weatherData && <p>{weatherData.visibility} m</p>}
                        </div>
                        <div className="text-center">
                            <p>Air Pressure</p>
                            {weatherData && <p>{weatherData.main.pressure} hPa</p>}
                        </div>
                        <div className="text-center">
                            <p>Wind</p>
                            {weatherData && <p>{weatherData.wind.speed} m/s</p>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Main;