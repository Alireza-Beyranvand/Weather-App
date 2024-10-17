'use server'

import TempAndIcon from "../TempAndIcon";
import Wind from "../Wind";


export default async function TempAndWind() {
    return (
        <>
            <div className="
             lg:col-span-2 
             col-span-1
             flex
             lg:flex-row
             flex-col">
                <TempAndIcon />
            </div>
            <div className="
                lg:col-span-3
                 col-span-1 
                  flex 
                flex-col 
                justify-between
                 gap-5
                  my-4 
                  lg:p-3
                  p-7
                  lg:mr-6
                  mx-auto
                  rounded-lg
                 text-white"
                style={{ width: "24rem" }}>
                <Wind />
            </div>
        </>
    )
}
