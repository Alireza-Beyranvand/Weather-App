// import { NextResponse } from "next/server";



// export async function GET(request) {

//     const getCitys = async () => {
//         try {
//             const result = await fetch('https://iran-locations-api.ir/api/v1/fa/cities?state=تهران');
//             if (!result.ok) {
//                 console.log(result)
//             }
//             return result.json();
//         } catch (err) {
//             console.log(err.message)
//         }
//     }

//     const citys = await getCitys();

//     return new NextResponse(JSON.stringify(citys), {
//         headers: { "Content-Type": "application/json" }
//     })

// };



import { NextResponse } from "next/server";



export async function GET() {

    const getCitys = async () => {
        try {
            const result = await fetch("https://iran-locations-api.ir/api/v1/fa/states");
            if (!result.ok) {
                console.log(result)
            }
            return result.json();
        } catch (err) {
            console.log(err.message)
        }
    }

    const citys = await getCitys();

    return new NextResponse(JSON.stringify(citys), {
        headers: { "Content-Type": "application/json" }
    })

};