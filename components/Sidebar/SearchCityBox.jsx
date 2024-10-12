
import Image from "next/image";
import cityIcon from "@/public/icons8-city-buildings-16.png";

export default function SearchCityBox() {
  return (
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
        <Image src={cityIcon} width={20} />
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
      />
    </div>
  )
}
