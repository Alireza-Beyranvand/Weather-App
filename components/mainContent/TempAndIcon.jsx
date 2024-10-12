'use client'


import Loading from '@/app/loading'
import axios from 'axios';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function TempAndIcon() {



  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});


  const apiKey = 'b06c3a6d88ab4b2c969130002240610'; // کلید API خود را وارد کنید  
  const city = 'Tehran';


  useEffect(() => {

    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://api.weatherapi.com/v1/forecast.json `, {
          params: {
            key: "b06c3a6d88ab4b2c969130002240610",
            q: "germani",
            lang: "fa",
            days: 6
          }
        })
        setWeather(data)
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [])


  let text = weather?.current?.condition?.text;
  let icon = weather?.current?.condition?.icon;
  let temp = weather?.current?.condition?.temp_c;
  let lastTime = weather?.current?.condition?.last_updated






  return (
    <>
      {icon ?
        <Image src={`https:${icon}`}
          alt="Weather Icon"
          width={175}
          height={90}
        />
        : <Loading />}
      <div className="my-auto text-white mr-8">
        <div className="flex gap-3">
          <div className="text-7xl">
            17
            <sup>
              &deg;
            </sup>
            C
            <div className="text-xl -mb-1 ml-4 text-start">
              RealFeel 17
              <sup>
                &deg;
              </sup>
              C
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
