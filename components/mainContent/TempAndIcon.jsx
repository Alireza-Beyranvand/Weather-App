'use client'


import Image from 'next/image'
import Load from '../Load';
import { useSelector } from 'react-redux';
import { getCity } from '@/lib/redux/slice/weatherSlice';
import { useGetWeatherInfoQuery } from '@/lib/redux/api/weatherApi';

export default function TempAndIcon() {


  const city = useSelector((state) => getCity(state));

  const { data: weatherInfo, isLoading, isFetching } = useGetWeatherInfoQuery(city);


  //  city selected
  let text = weatherInfo?.current?.condition?.text;
  let icon = weatherInfo?.current?.condition?.icon;
  let temp = weatherInfo?.current?.temp_c;
  let lastTime = weatherInfo?.current?.last_updated;


  return (
    <>
      {
        isLoading || isFetching ? (
          <Load />
        ) : (
          <>
            <Image src={`https:${icon}`}
              alt="Weather Icon"
              width={175}
              height={90}
              className='lg:w-auto w-[12rem] h-[12rem] mx-auto my-auto text-center'
            />
            <div className="my-auto text-white mx-auto">
              <div className="flex gap-3">
                <div className="lg:text-[3.5rem] text-[4rem]">
                  {temp}
                  <sup>
                    &deg;
                  </sup>
                  C
                  <div className="text-[1.5rem] text-center">
                    {text}
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
};
