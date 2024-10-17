'use client'


import { useEffect, useState } from "react"
import { ArrowBack } from "@mui/icons-material";
import Load from "@/components/Load";
import { useDispatch } from "react-redux";
import { setCity } from "@/lib/redux/slice/weatherSlice";


export default function CityContent() {

    const dispatch = useDispatch();


    const [citys, setCitys] = useState({});
    const [preCity, setPreCity] = useState();
    const [show, setShow] = useState(false);


    useEffect(() => {

        if (!window.navigator.onLine) {
            alert("please trun on intenet")
        } else {
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
        }
    }, [])


    // animation when start
    useEffect(() => {
        const dealy = setTimeout(() => setShow(pre => !pre), 400)
        return () => clearTimeout(dealy);
    }, [])





    // select city for reciveing cities
    const selectCity = async (cityName) => {
        if (preCity) {
            dispatch(setCity(cityName))
        } else {
            setCitys({})
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
        }
    };



    // back to citys
    const backButton = () => {
        setCitys(preCity);
        setPreCity();
    };


    return (
        <>
            <div className="grid
             grid-flow-col
              grid-cols-10 
              border
               rounded-t-md 
               drop-shadow-md
                bg-slate-900 ">
                <div className="text-white p-2 grid-cols-1">
                    <button className={`${!preCity && "hidden"}`}
                        onClick={backButton}><ArrowBack /></button>
                </div>
                <h6 className="
                 col-span-8
                text-white
                 p-2 
                ">Select city</h6>
            </div>
            <div className="flex 
            flex-col 
            rounded-b-lg 
            overflow-y-scroll
             border
              border-slate-400
               border-opacity-60 
               cityContent
               h-[21.2rem]
               ">
                {citys?.length > 0 ? citys?.map((citys, index) => (
                    <button className={`text-center
                         bg-slate-900
                        text-white
                        backdrop-blur-lg
                        rounded-md mx-2
                        ${index === 0 && "mt-1.5"}
                        shadow-2xl
                        hover:drop-shadow-2xl
                        hover:shadow-xl
                        hover:bg-slate-600
                        hover:text-slate-200
                        border
                        border-solid
                        border-blue-100 
                        mb-1
                        md:text-[1rem]
                         `}
                        style={{
                            transition: `transform ${index / 9.5}s`,
                            transform: `scale(${show ? 1 : 0})`,
                        }}
                        key={index} title={citys.name} onClick={() => selectCity(citys.name)} >
                        <p className="py-2 pb-1">{citys.name}</p>
                    </button>
                )) : <Load />
                }
            </div>
        </>

    )
}
