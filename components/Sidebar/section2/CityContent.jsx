'use client'


import { useEffect, useState } from "react"
import { ArrowBack } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities, getSearchCity } from "@/lib/redux/slice/weatherSlice";
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/navigation";
import Load from "@/components/Load";


export default function CityContent({ cities }) {

    const router = useRouter();


    const md = useMediaQuery(`(max-width : 800px)`);


    const [page, setPage] = useState(0);
    const [citySelected, setCitySelected] = useState();
    const [filtredCity, setFilteredCity] = useState();
    const [City, setCity] = useState();


    useEffect(() => {
        const fetchCity = async () => {
            if (citySelected) {
                try {
                    const result = await fetch(`https://iran-locations-api.ir/api/v1/en/cities?state=${citySelected}`);
                    if (!result.ok) {
                        console.log("مشکلی در اتصال اینترنت")
                    } else {
                        const res = await result.json()
                        setCity(res[0]?.cities)
                    }
                } catch (err) {
                    console.log(err.message)
                }
            }
        }
        fetchCity();

    }, [citySelected])



    //search
    const search = useSelector((state) => getSearchCity(state))
    // city selected



    // search
    useEffect(() => {
        if (search) {
            setPage(0);
            setFilteredCity(cities.filter((c) => c.name.toLowerCase().startsWith(search)))
        } else {
            setFilteredCity(cities)
        }
    }, [search])

    // select city for reciveing cities
    const selectCity = async (cityName) => {
        if (page === 1) {
            if (md) {
                window.scrollTo({
                    top: 610,
                    behavior: 'smooth',
                })
            }
            router.push(`/${cityName}`)
        } else {
            setCitySelected(cityName)
            setPage((pre) => pre + 1)
        }
    };

    // back to citys
    const backButton = () => {
        setPage((pre) => pre - 1)
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
                    <button className={`${page === 0 && "hidden"}`}
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
                {page === 0 && filtredCity?.length > 0 ? filtredCity?.map((citys, index) => (
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
                        key={index} title={citys?.name} onClick={() => selectCity(citys?.name)} >
                        <p className="py-2 pb-1">{citys?.name}</p>
                    </button>
                )) : page === 1 && City ? City?.map((citys, index) => (
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
                        key={index} title={citys?.name} onClick={() => selectCity(citys?.name)} >
                        <p className="py-2 pb-1">{citys?.name}</p>
                    </button>)) : <Load />
                }
            </div>
        </>

    )
}
