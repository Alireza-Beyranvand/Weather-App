'use client';

import Image from "next/image";
import Slider from "react-slick"

export default function Slider2({ weatherData }) {

    const Allforct = weatherData?.forecast?.forecastday;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings}>
                {
                    Allforct && Allforct?.map((af) => (
                        <div className="px-5">
                            <card className="flex flex-col border border-slate-900 p-4 px-8 rounded-xl drop-shadow-lg shadow-lg  bg-slate-900 ">
                                <div className="mx-auto">
                                    <Image
                                        src={`https:${af?.day?.condition?.icon}`}
                                        alt="Weather Icon"
                                        width={100}
                                        height={50}
                                        className='lg:w-auto w-[6rem] h-[5rem] mx-auto my-auto text-center'
                                    />
                                </div>
                                <div className="mt-2">
                                    {af?.day?.avgtemp_c}<sup>&deg;</sup>C
                                </div>
                                <div className="mt-1">
                                    {af?.day?.condition?.text}
                                </div>
                                <div className="mt-1">
                                    {af?.date}
                                </div>
                            </card>
                        </div>))}
            </Slider>
        </>
    )
}
