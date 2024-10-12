'use server'

import TempAndIcon from "../TempAndIcon";
import Wind from "../Wind";


export default async function TempAndWind() {
    return (
        <>
            <div className="
            xl:col-span-2 
            md:col-span-1
             flex 
             justify-center">
                <TempAndIcon />
            </div>
            <div className="
                md:col-span-3
                 sm:col-span-1 
                 mx-auto
                  flex 
                flex-col 
                justify-between
                 gap-5
                  my-4 
                  p-3
                  rounded-lg
                 text-white"
                style={{ width: "24rem" }}>
                <Wind />
            </div>
        </>
    )
}
