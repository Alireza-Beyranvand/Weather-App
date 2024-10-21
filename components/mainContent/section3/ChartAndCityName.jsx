'use server';

import Chart from "../Chart";
import CityDetails from "../CityDetails";


export default async function ChartAndCityName({ cityName, weatherData }) {

    return (
        <>
            <div className="
            bg-slate-900
                md:col-span-4
                  md:mr-2
                 rounded-xl 
                 flex
                 flex-col
                 items-center
                 justify-center">
                <Chart weatherData={weatherData} />
            </div>
            <div className="
            bg-slate-900
             md:col-span-2
            col-span-1
                mt-6
                flex 
                flex-col
                 text-white
                 justify-center
                  gap-8
                     rounded-xl">
                <CityDetails cityName={cityName} weatherData={weatherData} />
            </div>
        </>
    )
}
