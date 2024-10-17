'use client';

import Image from "next/image";
import bg from "@/public/logo.png";
import bg2 from "@/public/icons8-nextjs-windows-11-color-180.png";
import { Download } from "@mui/icons-material";

export default function SectionDownloadApp() {
    return (
        <>
            <div className="grid grid-cols-6 mx-4 bg-slate-900 rounded-lg ">
                <div className="col-span-4 my-auto flex items-center justify-center">
                    <div>
                        <Download className="text-4xl" />
                    </div>
                    <div>
                        <p >
                            download weather app
                        </p>
                    </div>
                </div>
                <div className="flex col-span-2 justify-center">
                    <Image src={bg} width={80} />
                </div>
            </div>
            <div className="lg:grid md:hidden grid-cols-3 mx-4 bg-slate-900  rounded-lg mt-2 logo">
                <div className="col-span-2 my-auto ">
                    <p className="px-5 mt-1.5">
                        Power By NEXT
                    </p>
                </div>
                <div className="col-span-1">
                    <Image src={bg2} width={80} />
                </div>
            </div>
        </>
    )
}
