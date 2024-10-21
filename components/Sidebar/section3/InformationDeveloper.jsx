'use server';

import Image from "next/image";
import bg from "@/public/Screenshot_۲۰۲۴۰۳۰۱_۲۳۵۳۵۳_Gallery.jpg";
import { ArrowForward } from '@mui/icons-material'


export default async function InformationDeveloper() {
    return (
        <div className="w-[89%] mx-auto max-w-sm border rounded-lg bg-transparent backdrop-blur-2xl border-gray-700 drop-shadow-xl shadow-xl md:mt-3 mt-8">
            <a href="#">
                <Image className="rounded-t-lg h-[12.99rem] rounded-[100%] mx-auto drop-shadow-xl shadow-md" src={bg} alt="weather app" width={230} />
            </a>
            <div className="p-4">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 drop-shadow-2xl">Alireza Sepahvand</h5>
                </a>
                <p className="mb-3 font-normal text-gray-100 drop-shadow-2xl">
                    Front-End developer
                </p>
                <a href="#" className="inline-flex items-center md:px-4 md:py-2 px-5 py-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:bg-gray-700  :hover:bg-blue-700 shadow-xl">
                    Go to website Developer
                    <ArrowForward sx={{ fontSize: "1.2rem", ml: 1, mt: .4 }} />
                </a>
            </div>
        </div>
    )
}
