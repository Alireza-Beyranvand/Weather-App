'use client'

import { useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';

export default function Drawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const handlerDrawer = () => setOpenDrawer((pre) => !pre);

    return (
        <>
            <button
                data-collapse-toggle="navbar-default" type="button" className="inline-flex 
                    items-center
                     p-2 w-10 h-10
                      justify-center 
                      text-sm 
                      rounded-lg 
                      md:hidden
                       hover:bg-gray-100
                        focus:outline-none
                         focus:ring-2
                         focus:ring-gray-200
                      dark:hover:bg-gray-700
                      dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
                onClick={handlerDrawer}>
                <MenuIcon className="bg-slate-700 p-1 rounded-lg" sx={{ color: "white", fontSize: "2.5rem" }} />
            </button>
            <div onMouseLeave={() => setOpenDrawer(false)} className={`md:h-full ${openDrawer ? "h-64" : "h-0"} w-full block md:w-auto sm:sticky z-20 overflow-hidden text-center`} style={{ transition: "height .5s" }}>
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 mr-3 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 drop-shadow-2xl">
                    <li>
                        <a href="#" className="block py-2 px-3 text-white bg-gray-600 rounded md:bg-transparent  md:p-0 dark:text-white hover:text-gray-200" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 rounded  md:border-0  md:p-0 text-white md:hover:bg-transparent md:hover:text-gray-300  hover:bg-gray-200 hover:text-black">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 rounded  md:border-0  md:p-0 text-white md:hover:bg-transparent md:hover:text-gray-300 hover:bg-gray-200 hover:text-black">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 rounded  md:border-0  md:p-0 text-white md:hover:bg-transparent md:hover:text-gray-300 hover:bg-gray-200 hover:text-black">Pricing</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-3 rounded  md:border-0 md:p-0 text-white md:hover:bg-transparent md:hover:text-gray-300 hover:bg-gray-200 hover:text-black">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
