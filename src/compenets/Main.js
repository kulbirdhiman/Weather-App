import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const response = await axios.get(
                    'https://api.openweathermap.org/data/2.5/forecast/daily?q=Mohali&cnt=7&appid=5d337259a03c4f16924e8b8d8c764ce4'
                );
                setForecastData(response.data);
            } catch (error) {
                console.error('Error fetching forecast data:', error);
            }
        };

        fetchForecastData();
    }, []);
    console.log(forecastData)
    return (
        <div className="">
            <div className='main' >
                <h3>Today Mohali weather</h3>
                <img src="" alt="" /> <span>13'c</span>
                <div>
                    <h6>Temp:18 deg</h6>
                    <h6>Air qualty : 18 deg</h6>
                    <h6>wind : 18 deg</h6>
                </div>
            </div>
        </div>

    );
};
export default Main;
