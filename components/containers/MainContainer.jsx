'use server';


import Divider2 from "../mainContent/section4/Divider2";
import TempAndWind from "../mainContent/section2/TempAndWind";
import ChartAndCityName from "../mainContent/section3/ChartAndCityName";
import Slider2 from "./Slider2";
import SliderContainer from "./SliderContainer"
import DividerAndTime from "../mainContent/section1/DividerAndTime";


export default async function MainContainer({ cityName }) {

    const weather = async () => {
        try {
            const result = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_KEY_APP}&q=${cityName}&lang=en&days=7`)
            if (!result.ok) {
                console.log("error in fetch data")
            } else {
                return result.json();
            }
        } catch (err) {
            console.log(err.message)
        }

    };
    const weatherData = await weather();

    return (
        <div className="rounded-md
         backdrop-blur-2xl 
         drop-shadow-xl 
        shadow-2xl
         border
          border-slate-400">
            <DividerAndTime cityName={cityName} />
            <hr />
            <div className="grid
             lg:grid-cols-5 
              grid-cols-1
              mt-7
             bg-slate-900 
             rounded-2xl 
             mx-2
              shadow-xl
               drop-shadow-md">
                <TempAndWind cityName={cityName} weatherData={weatherData} />
            </div>
            <div className="
            grid 
            lg:grid-cols-6
            md:grid-cols-2 
            text-white
            rounded-2xl 
             drop-shadow-2xl
             shadow-xl 
             mt-7
             mx-2
            lg:bg-slate-900">
                <ChartAndCityName cityName={cityName} weatherData={weatherData} />
            </div>
            <div>
                <Divider2 cityName={cityName} weatherData={weatherData} />
            </div>
            <div className="lg:grid hidden grid-cols-1 rounded-lg mt-8 mb-12 text-white w-[88%] mx-auto">
                <SliderContainer cityName={cityName} weatherData={weatherData} />
            </div>
            <div className="lg:hidden sm:grid grid-cols-1 rounded-lg mt-8 mb-12 text-white w-[88%] mx-auto">
                <Slider2 cityName={cityName} weatherData={weatherData} />
            </div>
        </div>
    )
}
