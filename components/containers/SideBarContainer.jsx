'use server';

import SearchCityBox from "../Sidebar/section1/SearchCityBox";
import CityContent from "../Sidebar/section2/CityContent";
import InformationDeveloper from "../Sidebar/section3/InformationDeveloper";
import SectionDownloadApp from "../Sidebar/section3/SectionDownloadApp";


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
            <div className="lg:block hidden">
                <InformationDeveloper />
            </div>
        </>
    )
}
