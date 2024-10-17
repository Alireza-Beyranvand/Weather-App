'use client';


import Load from "@/components/Load";
import { useGetTimeQuery } from "@/lib/redux/api/timeApi";
import { getCity } from "@/lib/redux/slice/weatherSlice";
import { useSelector } from "react-redux";


export default function DividerAndTime({ style }) {

    const CityName = useSelector((state) => getCity(state));

    const { data, isLoading, isFetching } = useGetTimeQuery();

    const date = data?.date?.full?.official?.iso?.en;
    const time = data?.time24?.full?.en

    return (
        isLoading || isFetching ? <Load /> : (
            <div className={`header flex justify-between py-4 px-6 ${style} text-white bg-slate-900 rounded`}>
                <div>
                    {CityName}
                </div>
                <div>
                    {time} | {date}
                </div>
            </div>
        )
    )
}
