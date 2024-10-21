'use server';

import Image from "next/image";
import Load from "../Load";

export default async function SliderContainer({ cityName, weatherData }) {


  const Allforct = weatherData?.forecast?.forecastday;


  return (
    <div>
      <div className="flex justify-evenly overflow-x-scroll ">
        {Allforct && Allforct?.map((af, index) => (
          <card key={index}
            className="flex
             flex-col
             border
              border-slate-700
               px-4
               mt-6
                rounded-xl 
                drop-shadow-lg 
                shadow-lg
                 bg-slate-800">
            <div className="mx-auto px-5">
              <Image
                src={`https:${af?.day?.condition?.icon}`}
                alt="Weather Icon"
                width={100}
                height={50}
                className='lg:w-auto w-[12rem] h-[5rem] mx-auto my-auto text-center'
              />
            </div>
            <div>
              {af?.day?.avgtemp_c}<sup>&deg;</sup>C
            </div>
            <div className="mt-1">
              {af?.day?.condition?.text}
            </div>
            <div className="mt-1">
              {af?.date}
            </div>
          </card>
        ))}
      </div>
    </div>
  )
}
