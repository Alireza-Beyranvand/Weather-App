'use server';


import Divider2 from "../mainContent/section4/Divider2";
import TempAndWind from "../mainContent/section2/TempAndWind";
import ChartAndCityName from "../mainContent/section3/ChartAndCityName";
import Slider2 from "./Slider2";
import SliderContainer from "./SliderContainer"
import DividerAndTime from "../mainContent/section1/DividerAndTime";


export default async function MainContainer() {

    return (
        <div className="rounded-md
         backdrop-blur-2xl 
         drop-shadow-xl 
        shadow-2xl
         border
          border-slate-400">
            <DividerAndTime />
            <hr />
            <div className="grid
             lg:grid-cols-5 
              grid-cols-1
              mt-8
             bg-slate-900 
             rounded-2xl 
             mx-2
              shadow-xl
               drop-shadow-md">
                <TempAndWind />
            </div>
            <div className="
            grid 
            lg:grid-cols-6
            md:grid-cols-2 
            text-white
            rounded-2xl 
             drop-shadow-2xl
             shadow-xl 
             mt-6
             mx-2
            lg:bg-slate-900">
                <ChartAndCityName />
            </div>
            <div>
                <Divider2 name={"Weather"} value={"3:20"} style={"mt-7 , border-b"} />
            </div>
            <div className="lg:grid hidden grid-cols-1 rounded-lg mt-8 mb-12 text-white w-[88%] mx-auto">
                <SliderContainer />
            </div>
            <div className="lg:hidden sm:grid grid-cols-1 rounded-lg mt-8 mb-12 text-white w-[88%] mx-auto">
                <Slider2 />
            </div>
        </div>
    )
}
