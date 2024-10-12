'use server';


import Divider from "../mainContent/section1/Divider";
import TempAndWind from "../mainContent/section2/TempAndWind";
import ChartAndCityName from "../mainContent/section3/ChartAndCityName";
import SliderContainer from "./SliderContainer"



export default async function MainContainer() {

    return (
        <div className="rounded-md
         backdrop-blur-2xl 
         drop-shadow-xl 
        shadow-2xl
         border
          border-slate-400">
            <Divider name={"Current Weather"} value={"3:20"} />
            <hr />
            <div className="grid
             xl:grid-cols-5 
             md:pl-7 
             md:mt-7
             md:grid-cols-1
              mt-8
             bg-slate-700 
             rounded-2xl 
             px-3 
             mx-2
              shadow-xl
               drop-shadow-md">
                <TempAndWind />
            </div>
            <div className="
            grid 
            sm:grid-cols-2 
            md:grid-cols-6
            text-white
            rounded-2xl 
             drop-shadow-md 
             mt-6
             mx-2">
                <ChartAndCityName />
            </div>
            <div>
                <Divider name={"Weather"} value={"3:20"} style={"mt-7 , border-b"} />
            </div>
            <div className="grid grid-cols-1 rounded-lg mt-8 mb-12 text-white w-[88%] mx-auto">
                <SliderContainer />
            </div>
        </div>
    )
}
