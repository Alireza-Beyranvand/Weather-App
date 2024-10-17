'use client';

import Image from "next/image";
import img from "@/public/logo.png"

export default function Loading() {
    return (
        <div className="bg-slate-800 fixed top-0 left-0 h-full w-full z-50">
            <div className=" fixed top-[40%] left-[49.9%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
                <Image src={img} className="w-[10rem] mx-auto" />
                <div className="text-white text-[2rem] mt-3">
                    Weather App
                </div>
            </div>
            <div className="loader fixed lg:top-[59%] top-[65%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
            </div>
        </div >
    )
}