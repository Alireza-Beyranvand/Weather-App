'use client';

import { LineChart } from '@mui/x-charts/LineChart';
import { useGetWeatherInfoQuery } from '@/lib/redux/api/weatherApi';
import { useSelector } from 'react-redux';
import { getCity } from '@/lib/redux/slice/weatherSlice';

export default function Chart() {

    const city = useSelector((state) => getCity(state));
    const { data: weatherInfo, isLoading, isFetching } = useGetWeatherInfoQuery(city);
    const Allforct = weatherInfo?.forecast?.forecastday;
    const dataTempChart = Allforct?.map((a) => a?.day?.avgtemp_c)


    return (
        <>
            <div className="lg:w-[40vw] w-[80vw] bg-gray-300 my-4 rounded-2xl mx-auto ">
                {isLoading || isFetching ? (
                    <div className="h-[201.5px] flex items-center justify-center text-black">Loading...</div>
                ) : (
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
                )}
            </div>
            <div className="mb-2 bg-slate-600 px-4 rounded-xl">
                day-temp C <sup>&deg;</sup>
            </div>
        </>
    );
}