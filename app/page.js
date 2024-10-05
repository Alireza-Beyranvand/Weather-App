
import CityContent from "@/components/CityContent";
import SearchCityBox from "@/components/SearchCityBox";



export const metadata = {
  title: "Weather App | Home"
}

export default async function Home() {

  return (
    <>
      <div className="pt-8">
        <section className="container grid md:grid-cols-6 sm:grid-cols-1 grid-rows-8 text-center">
          <aside className=" md:col-span-2 sm:col-span-1 row-span-3">
            <SearchCityBox />
            <article className="mx-4 drop-shadow-2xl">
              <CityContent />
            </article>
          </aside>
          <main className="md:col-span-4 sm:col-span-1">
            ss
          </main>
        </section>
      </div>

    </>
  );
}
