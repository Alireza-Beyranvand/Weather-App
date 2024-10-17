

import { NextResponse } from "next/server";




export async function POST(request) {


    const city = await request.json();



    const getTime = async () => {
        try {
            const data = await fetch(`https://api.keybit.ir/time/?timezone=Asia/${city.name}`);
            if (!data.ok) {
                throw new Error("not online");
            }
            const result = await data.json();
            if (result) return result;
        }
        catch (err) {
            console.log(err.message);
            console.log("error in resived time")
        };
    };



    try {
        const getResult = await getTime();
        return new NextResponse(JSON.stringify(getResult), { status: 200 })
    } catch (err) {
        return new NextResponse(JSON.stringify({ error: err.message }, { status: 500 }))
    }

}