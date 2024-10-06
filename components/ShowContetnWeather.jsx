'use client'

import Loading from "@/app/loading";
import { Button, colors } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, LineChart, Tooltip, XAxis, YAxis } from "recharts";




export default function ShowContetnWeather() {



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






    const rangeData = [
        {
            "day": "1",
            "temperature": [
                -10,
                10
            ]
        },
        {
            "day": "2",
            "temperature": [
                2,
                15
            ]
        },
        {
            "day": "3",
            "temperature": [
                3,
                12
            ]
        },
        {
            "day": "4",
            "temperature": [
                4,
                12
            ]
        },
        {
            "day": "5",
            "temperature": [
                12,
                16
            ]
        },
        {
            "day": "6",
            "temperature": [
                5,
                16
            ]
        },
        {
            "day": "7",
            "temperature": [
                3,
                30
            ]
        }
    ]








    return (
        <div className="rounded-md
         backdrop-blur-2xl 
         drop-shadow-xl 
        shadow-2xl
         mx-2 mb-3 
         border
          border-slate-300 
          border-opacity-40"
            style={{ height: "79.67vh" }}>
            <div className="flex justify-between py-4 px-6 text-white bg-slate-700 rounded">
                <div>
                    Current Weather
                </div>
                <div>
                    9:20
                </div>
            </div>
            <hr />
            <div className="grid  xl:grid-cols-5 md:pl-7 md:mt-7 md:grid-cols-1 mt-8
             bg-slate-700 rounded-2xl px-3 mx-2 shadow-xl drop-shadow-md">
                <div className="xl:col-span-2 md:col-span-1 flex justify-center" >
                    {icon ?
                        <Image src={`https:${icon}`}
                            alt="Weather Icon"
                            width={150}
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
                </div>
                <div className="md:col-span-3 
                sm:col-span-1 
                mx-auto 
                flex 
                justify-between
                 flex-col 
                 gap-5
                 text-white
                  my-4 
                  p-3
                  rounded-lg" style={{ width: "24rem" }}>
                    <div className="flex justify-between">
                        <div>
                            wind
                        </div>
                        <div>
                            11km
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <div>
                            strong wind
                        </div>
                        <div>
                            11km
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <div>
                            air quality
                        </div>
                        <div className=" text-green-500">
                            middle
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-slate-700 rounded-2xl  mx-2 shadow-xl drop-shadow-md mt-2">
                <AreaChart
                    width={400}
                    height={200}
                    data={rangeData}
                    margin={{
                        top: 40, right: 30, bottom: 20, left: 30,
                    }}
                >
                    <XAxis dataKey="day" stroke="white" tick={{ fill: "white" }} />
                    <YAxis stroke="white" tick={{ fill: "white" }} />
                    <Area dataKey="temperature" stroke="red" fill="blue" />
                    <Tooltip />
                </AreaChart>
            </div>
        </div>
    )
}
