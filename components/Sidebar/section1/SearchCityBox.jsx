'use client';

import Image from "next/image";
import cityIcon from "@/public/icons8-city-buildings-16.png";
import { useDispatch } from "react-redux";
import { searchCity } from "@/lib/redux/slice/weatherSlice";
import { LocationOn } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";

export default function SearchCityBox() {



  const input = useRef();

  const dispatch = useDispatch();

  const sendSearch = (e) => {
    dispatch(searchCity(e))
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setTimeout(() => { input.current.focus() }, 500)
  }

  return (
    <>
      <div className={`fixed bottom-6 right-0 left-0 z-20 drop-shadow-2xl shadow-2xl lg:hidden block `}>
        <button className="bg-slate-300 px-4 py-2 rounded-3xl" onClick={scrollTop}>
          <p className="pt-1 drop-shadow-2xl">
            Selected City <LocationOn />
          </p>
        </button>
      </div>
      <div className="flex px-4 pb-5 drop-shadow-md shadow-2xl mt-[.04rem]">
        <span className="inline-flex 
            items-center px-3
             text-sm 
             rounded-e-0
             border 
             border-gray-300 border-e-0 
             border-opacity-85
               rounded-s-md 
               bg-slate-900">
          <Image src={cityIcon} width={20} alt="weather app" />
        </span>
        <input type="text" id="website-admin" className="rounded-none
       rounded-e-md
           border
           border-opacity-80
                text-blue-200
                placeholder:text-blue-100
                  block 
                  flex-1
                   min-w-0
                    w-full 
                    text-sm
                     p-2.5
                     focus:outline-none
                     bg-slate-900"
          placeholder="City Name"
          onChange={(e) => sendSearch(e.target.value)}
          ref={input}
        />
      </div>
    </>
  )
}
