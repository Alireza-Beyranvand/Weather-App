'use server';

import SearchCityBox from "../Sidebar/section1/SearchCityBox";
import CityContent from "../Sidebar/section2/CityContent";
import InformationDeveloper from "../Sidebar/section3/InformationDeveloper";
import SectionDownloadApp from "../Sidebar/section3/SectionDownloadApp";


export default async function SideBarContainer() {


    const fetchCitys = async () => {
        try {
            const result = await fetch(`https://iran-locations-api.ir/api/v1/en/states`)
            if (!result.ok) {
                console.log("filed in fetch cityes")
            }
            else {
                return result.json();
            }
        } catch (err) {
            console.log(err.message)
        }
    };

    const cityies = await fetchCitys();



    return (
        <>
            <SearchCityBox />
            <div className="mx-4 drop-shadow-2xl backdrop-blur-2xl">
                <CityContent cities={cityies} />
            </div>
            <div className="text-white md:mt-5 mt-7">
                <SectionDownloadApp />
            </div>
            <div className="lg:block hidden">
                <InformationDeveloper />
            </div>
        </>
    )
}
