'use server';

import CityContent from "../Sidebar/CityContent"
import InformationDeveloper from "../Sidebar/InformationDeveloper"
import SearchCityBox from "../Sidebar/SearchCityBox"
import SectionDownloadApp from "../Sidebar/SectionDownloadApp"


export default async function SideBarContainer() {
    return (
        <>
            <SearchCityBox />
            <div className="mx-4 drop-shadow-2xl backdrop-blur-2xl">
                <CityContent />
            </div>
            <div className="text-white md:mt-5 mt-7">
                <SectionDownloadApp />
            </div>
            <div>
                <InformationDeveloper />
            </div>
        </>
    )
}
