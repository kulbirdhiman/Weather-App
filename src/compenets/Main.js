import React, { useState, useEffect } from 'react';
// import { FaCloud } from 'react-icons/fa';
import { FaCloud } from 'react-icons/fa'
import { FaTemperatureEmpty } from "react-icons/fa6";

import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    let time = new Date().toDateString();
    console.log(time);

    return (
        <section>
            <div className="wrap py-7" >
                <h1 className='logo '> Weatherme </h1>
                <div className='main-card p-3 adj-w'>
                    <h2 className='ms-5 text-white mt-3'>Burdan</h2>
                    <div className='mt-4 p-5 text-center'>
                        <h1><FaTemperatureEmpty />27 °C<FaCloud /> </h1>
                    </div>
                    <p>{time}</p>
                    <div className='d-flex'>
                        <div className=' text-center'>
                            <p>humid</p>
                            <p>99%</p>
                        </div>
                        <div className=' text-center'>
                            <p>visibilty</p>
                            <p>8km</p>
                        </div>
                        <div className=' text-center'>
                            <p>Air presure</p>
                            <p>1000</p>
                        </div>
                        <div className=' text-center'>
                            <p>Wind</p>
                            <p>0</p>
                        </div>
                    </div>
                </div>


                <div className='contanair mt-5 d-flex' >
                    <div className='sm-card text-center'>
                        <p className='mb-0 '>Wind</p>
                        <p className='mb-1'>0</p>
                    </div>
                    <div className='sm-card text-center'>
                        <p className='mb-0 '>Wind</p>
                        <p className='mb-1'>0</p>
                    </div>
                    <div className='sm-card text-center'>
                        <p className='mb-0 '>Wind</p>
                        <p className='mb-1'>0</p>
                    </div>
                    <div className='sm-card text-center'>
                        <p className='mb-0 '>Wind</p>
                        <p className='mb-1'>0</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
