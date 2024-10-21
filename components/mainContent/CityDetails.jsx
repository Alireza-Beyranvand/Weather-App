'use server';

import { ArrowDownward, ArrowUpward, LocationCity } from "@mui/icons-material";


export default async function CityDetails({ cityName, weatherData }) {


    const allTemp = weatherData?.forecast?.forecastday;
    const maxTemp = parseFloat(allTemp?.map((a) => a?.day?.maxtemp_c));
    const minTemp = parseFloat(allTemp?.map((a) => a?.day?.mintemp_c));


    return (
        <div className="flex flex-col gap-7 lg:mb-10 lg:-mt-1 lg:my-1 my-7">
            <div className="text-[3.5vh]">
                <LocationCity className="text-4xl" /> {cityName ? cityName : null}
            </div>
            <hr class="h-px mx-auto border-0 bg-gray-200 lg:w-[30vh] w-[60vw] " />
            <div>
                <ArrowUpward />  Maximum Temp &nbsp; : &nbsp; {maxTemp} C <sup>&deg;</sup>
            </div>
            <hr class="h-px mx-auto border-0 bg-gray-200 lg:w-[30vh] w-[60vw]" />
            <div className="mb-5">
                <ArrowDownward />  Minimum Temp &nbsp; : &nbsp; {minTemp} C <sup>&deg;</sup>
            </div>
        </div>
    )
}
