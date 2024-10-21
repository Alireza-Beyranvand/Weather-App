'use client';

import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';
import Load from '../Load';


export default function Chart({ weatherData }) {


    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, [])

    const Allforct = weatherData?.forecast?.forecastday;
    const dataTempChart = Allforct?.map((a) => a?.day?.avgtemp_c)

    return (
        <>

            {!weatherData ? (
                <div className="lg:w-[40vw] w-[80vw] bg-black my-4 rounded-2xl mx-auto">The information of this city is not available</div>
            ) : show ? (
                <div className="lg:w-[40vw] w-[80vw] bg-gray-300 my-4 rounded-2xl mx-auto ">
                    <LineChart
                        xAxis={[{ data: dataTempChart.map((_, index) => index) }]}
                        series={[
                            {
                                data: dataTempChart,
                                color: "#090942",
                                curve: "catmullRom",
                                label: "Temp _ Day",
                            },
                        ]}
                        height={201.5}
                        className='lg:w-[40vw] w-[75vw] mx-auto'
                    />
                </div>
            ) : (
                <div className="lg:w-[40vw] w-[80vw] bg-black my-4 rounded-2xl mx-auto ">
                    <Load />
                </div>
            )}
            <div className="mb-2 bg-slate-600 px-4 rounded-xl">
                day-temp C <sup>&deg;</sup>
            </div>
        </>
    );
}