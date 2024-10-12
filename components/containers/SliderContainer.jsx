'use client';


import Image from "next/image";
import Slider from "react-slick"
import bg from "@/public/logo.png"

export default function SliderContainer() {


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false
  };


  return (
    <Slider {...settings}>
      <div>
        <div className="flex justify-between gap-6 p-3 flex-col md:flex-row ">
          <card className="flex flex-col border border-slate-700 p-4 px-8 rounded-xl drop-shadow-lg shadow-lg  bg-slate-700 ">
            <div className="mx-auto">
              <Image src={bg} width={100} />
            </div>
            <div>
              17<sup>&deg;</sup>C
            </div>
            <div className="mt-1">
              jul 5
            </div>
          </card>
          <card className="flex flex-col border border-slate-700 p-4 px-8 rounded-xl drop-shadow-lg shadow-lg  bg-slate-700 ">
            <div className="mx-auto">
              <Image src={bg} width={100} />
            </div>
            <div>
              17<sup>&deg;</sup>C
            </div>
            <div className="mt-1">
              jul 5
            </div>
          </card>
          <card className="flex flex-col border border-slate-700 p-4 px-8 rounded-xl drop-shadow-lg shadow-lg  bg-slate-700 ">
            <div className="mx-auto">
              <Image src={bg} width={100} />
            </div>
            <div>
              17<sup>&deg;</sup>C
            </div>
            <div className="mt-1">
              jul 5
            </div>
          </card>
          <card className="flex flex-col border border-slate-700 p-4 px-8 rounded-xl drop-shadow-lg shadow-lg  bg-slate-700 ">
            <div className="mx-auto">
              <Image src={bg} width={100} />
            </div>
            <div>
              17<sup>&deg;</sup>C
            </div>
            <div className="mt-1">
              jul 5
            </div>
          </card>
        </div>
      </div>
      <div>
        d
      </div>
      <div>
        d
      </div>
    </Slider>
  )
}
