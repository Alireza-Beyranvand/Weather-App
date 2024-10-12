'use server';

import Chart from "../Chart";
import CityDetails from "../CityDetails";


export default async function ChartAndCityName() {

    return (
        <>
            <div className="
                md:col-span-4
                  md:mr-2
                 bg-slate-700 
                 rounded-xl 
                 shadow-xl 
                 drop-shadow-lg
                 flex
                 flex-col
                 items-center
                 justify-center">
                <Chart />
            </div>
            <div className="cityName
                    sm:col-span-1
                    my-6
                    md:my-0
                    md:col-span-2
                flex flex-col
                 bg-gray-700 
                 text-white
                 justify-center
                  gap-8
                     drop-shadow-md
                     shadow-2xl
                     rounded-xl">
                <CityDetails />
            </div>
        </>
    )
}
