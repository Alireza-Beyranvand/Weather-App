'use client'

import Loading from "@/app/loading";
import { useEffect, useState } from "react"

import { ArrowBack } from "@mui/icons-material";


export default function CityContent() {

    const [citys, setCitys] = useState({});
    const [preCity, setPreCity] = useState();


    useEffect(() => {
        const getCitys = async () => {
            try {
                const response = await fetch("/api/getCitys", {
                    method: "GET",
                    headers: { "Content_Type": "application/json" },
                })
                if (!response) {
                    console.log("no response")
                }
                const result = await response.json();
                setCitys(result);
            } catch (err) {
                console.log(err.message)
            }
        };
        getCitys();
    }, [])


    const selectCity = async (cityName) => {
        try {
            const data = await fetch("/api/getCities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: cityName })
            })
            if (!data.ok) {
                throw new Error("no cities")
            }
            const result = await data.json();
            setPreCity(citys);
            setCitys(result[0].cities);
        } catch (err) {
            console.log(err.message)
        }
    };

    const backButton = () => {
        setCitys(preCity);
        setPreCity();
    };

    return (
        <>
            <div className="grid grid-flow-col grid-cols-10  bg-sky-600 rounded-t-md drop-shadow-md ">
                <div className="text-white p-2 grid-cols-1">
                    <button className={`${!preCity && "hidden"}`}
                        onClick={backButton}><ArrowBack /></button>
                </div>
                <h6 className="text-white p-2 col-span-8">Select city</h6>
            </div>
            <div className="flex flex-col  bg-slate-400 rounded-b-lg overflow-y-scroll" style={{ height: "60vh" }}>
                {citys?.length > 0 ? citys?.map((citys, index) => (
                    <button className={`text-center
                         bg-slate-300 
                        rounded-md mx-2
                         ${index === 0 && "mt-4"}
                          mb-2
                          drop-shadow-md
                          hover:drop-shadow-2xl
                          hover:bg-slate-200
                          `}
                        key={index} title={citys.name} onClick={() => selectCity(citys.name)} >
                        <p className="py-2 pb-1">{citys.name}</p>
                    </button>
                )) : <Loading />
                }
            </div>
        </>

    )
}
