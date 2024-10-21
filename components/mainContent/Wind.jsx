'use server';


export default async function Wind({ weatherData }) {

    let windKph = weatherData?.current?.wind_kph;
    let windDir = weatherData?.current?.wind_dir;

    const airquality = () => {
        if (weatherData?.current?.temp_c < 25 && weatherData?.current?.temp_c > 12) {
            return "good"
        } else {
            return "middle"
        };
    };

    return (
        <>
            <div className="flex justify-between">
                <div>
                    wind
                </div>
                <div>
                    {windKph} km/h
                </div>
            </div>
            <hr className="mr-2" />
            <div className="flex justify-between">
                <div>
                    wind direction
                </div>
                <div>
                    {windDir}
                </div>
            </div>
            <hr className="mr-2" />
            <div className="flex justify-between">
                <div>
                    air quality
                </div>
                <div className=" text-green-500">
                    {airquality()}
                </div>
            </div>
        </>
    )
}
