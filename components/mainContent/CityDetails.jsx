'use client';

import { useGetWeatherInfoQuery } from "@/lib/redux/api/weatherApi";
import { getCity } from "@/lib/redux/slice/weatherSlice";
import { useSelector } from "react-redux";
import Load from "../Load";
import { ArrowDownward, ArrowUpward, LocationCity, Maximize } from "@mui/icons-material";



export default function CityDetails() {


    const city = useSelector((state) => getCity(state));

    const { data: weatherInfo, isLoading, isFetching } = useGetWeatherInfoQuery(city);
    const allTemp = weatherInfo?.forecast?.forecastday;
    const maxTemp = parseFloat(allTemp?.map((a) => a?.day?.maxtemp_c));
    const minTemp = parseFloat(allTemp?.map((a) => a?.day?.mintemp_c));


    return (
        isLoading || isFetching ? (<Load />) : (
            <div className="flex flex-col gap-7 lg:mb-10 mt-1">
                <div className="text-[3.5vh]">
                    <LocationCity className="text-4xl" />    {city}
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
    )
}
