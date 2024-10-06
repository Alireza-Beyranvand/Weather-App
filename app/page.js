
import CityContent from "@/components/CityContent";
import SearchCityBox from "@/components/SearchCityBox";
import ShowContetnWeather from "@/components/ShowContetnWeather";



export const metadata = {
  title: "Weather App | Home"
}

export default async function Home() {

  return (
    <>
      <div className="pt-8">
        <section className=" grid md:grid-cols-6 sm:grid-cols-1 text-center">
          <aside className=" md:col-span-2 sm:col-span-1 row-span-3 mb-8">
            <SearchCityBox />
            <article className="mx-4 drop-shadow-2xl backdrop-blur-2xl">
              <CityContent />
            </article>
          </aside>
          <main className="md:col-span-4 sm:col-span-1 md:mr-3">
            <ShowContetnWeather />
          </main>
        </section>
      </div>

    </>
  );
}
