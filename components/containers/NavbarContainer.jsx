'use server';

import Link from "next/link";
import bg from "@/public/logo.png";
import Image from "next/image";
import Drawer from "../navbar/Drawer";

export default async function NavbarContainer() {
    return (
        <>
            <div className="sticky top-0 z-10 ">
                <nav className="bg-gray-900  border-b border-blue-300 drop-shadow-md shadow-2xl rounded-b-md">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <Link href="/" className="flex items-center space-x-3" style={{
                            display: "flex", justifyContent: "center", margin: "0 .5rem"
                        }}>
                            <Image src={bg} className="w-9" alt="Weather Logo" />
                            <span className="self-center md:text-2xl  sm:text-1rem font-semibold whitespace-nowrap text-white">Weather App</span>
                        </Link>
                        <Drawer />
                    </div>
                </nav>
            </div>
        </>
    )
}
