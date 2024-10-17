'use client';



import { useSelector } from 'react-redux';
import { getCity } from '@/lib/redux/slice/weatherSlice';
import { useGetWeatherInfoQuery } from '@/lib/redux/api/weatherApi';
import Load from '../Load';


export default function Wind() {

    const city = useSelector((state) => getCity(state));
    const { data: weatherInfo, isLoading, isFetching } = useGetWeatherInfoQuery(city);

    let windKph = weatherInfo?.current?.wind_kph;
    let windDir = weatherInfo?.current?.wind_dir;

    const airquality = () => {
        if (weatherInfo?.current?.temp_c < 25 && weatherInfo?.current?.temp_c > 12) {
            return "good"
        } else {
            return "middle"
        };
    };

    return (
        isLoading || isFetching ? (<Load />) : (
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
    )
}
