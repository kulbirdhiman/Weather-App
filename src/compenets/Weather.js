import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [forecastData, setForecastData] = useState(null);
    const lat = '31.0718'; // Replace with actual latitude
    const lon = '75.4017'; // Replace with actual longitude
    const cnt = 7; // Number of days for forecast
    const apiKey = '5d337259a03c4f16924e8b8d8c764ce4'; // Replace with your API key

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${apiKey}`
                );
                setForecastData(response.data);
            } catch (error) {
                console.error('Error fetching forecast data:', error);
            }
        };

        fetchForecastData();
    }, [lat, lon, cnt, apiKey]);

    return (
        <div>
            <h2>7-Day Forecast</h2>
            {forecastData && (
                <div>
                    {forecastData.list.map((day, index) => (
                        <div key={index}>
                            <p>Date: {new Date(day.dt * 1000).toLocaleDateString()}</p>
                            <p>Temperature: {day.temp.day} K</p>
                            <p>Description: {day.weather[0].description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Weather;
