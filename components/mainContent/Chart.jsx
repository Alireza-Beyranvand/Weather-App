'use client';

import { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Chart() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // فرض کنید بارگذاری داده‌ها نیاز به زمان دارد  
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // زمان بارگذاری خود را تنظیم کنید  

        return () => clearTimeout(timer); // پاک کردن تایمر  
    }, []);

    return (
        <>
            <div className="bg-gray-300 my-4 rounded-2xl md:w-[35rem] w-[25rem] mx-auto ">
                {loading ? (
                    <div className="h-[201.5px] flex items-center justify-center text-black">Loading...</div>
                ) : (
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                            },
                        ]}
                        height={201.5}
                        className='md:w-[35rem] w-[25.6rem] mx-auto'
                    />
                )}
            </div>
            <div className="mb-2 bg-slate-600 px-4 rounded-xl">
                temp-day
            </div>
        </>
    );
}