

import MainContainer from "@/components/containers/MainContainer";
import SideBarContainer from "@/components/containers/SideBarContainer";
import Comments from "@/components/comments/Comments";

export const metadata = {
  title: "Weather App | Home"
}


export async function generateStaticParams() {
  const Cities = await fetch("https://iran-locations-api.ir/api/v1/fa/cities").then((res) => res.json());
  if (Cities) {
    return Cities.map((City) => City.name)
  }
}

export default async function Home(request) {

  const cityName = request?.params?.url[0];

  return (
    <>
      <div className="flex flex-col pt-5">
        <section className="grid lg:grid-cols-9 grid-cols-1 text-center">
          <aside className="md:col-span-2 sm:col-span-1 row-span-3 mb-8">
            <SideBarContainer cityName={cityName} />
          </aside>
          <main className="md:col-span-7 sm:col-span-1 md:mr-3 shadow-2xl">
            <MainContainer cityName={cityName} />
          </main>
        </section>
        <section>
          <Comments />
        </section>
        <div />
      </div>
    </>
  );
}
