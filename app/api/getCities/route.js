
import { NextResponse } from "next/server";



export async function POST(request) {

    const cityName = await request.json();

    const getCities = async () => {
        try {
            const data = await fetch(`https://iran-locations-api.ir/api/v1/fa/cities?state=${cityName.name}`);
            if (!data.ok) {
                throw new error("no cities")
            }
            const result = await data.json();
            console.log(result);
            return result;
        } catch (err) {
            console.log(err.message)
        }
    };

    const cities = await getCities();

    return new NextResponse(JSON.stringify(cities));
};