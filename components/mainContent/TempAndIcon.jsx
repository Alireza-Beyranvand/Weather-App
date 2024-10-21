'use server'


import Image from 'next/image'
import { toast } from 'react-toastify';

export default async function TempAndIcon({ weatherData }) {


  const icon = weatherData?.current?.condition?.icon;
  const text = weatherData?.current?.condition?.text;
  const temp = weatherData?.current?.temp_c;



  return (
    <>
      {
        icon ? (<>
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
        </>) : (<h1 className='text-white mx-auto my-auto'>The information of this city is not available !</h1>)
      }
    </>
  )
};
