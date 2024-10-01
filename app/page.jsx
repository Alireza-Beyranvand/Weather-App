import Image from "next/image";
import cityIcon from "@/public/icons8-city-buildings-16.png";


export const metadata = {
  title: "Weather App | Home"
}

export default async function Home() {
  return (
    <>
      <div className="pt-8">
        <section className="container grid md:grid-cols-5 sm:grid-cols-1  grid-rows-8 text-center">
          <aside className="pt-5 md:col-span-2 sm:col-span-1 row-span-3 bg-sky-700 rounded-md ">
            <div className="flex px-4 pb-5">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                <Image src={cityIcon} width={20} />
              </span>
              <input type="text" id="website-admin" className="rounded-none rounded-e-lg
               bg-gray-50 border
                text-gray-900
                 focus:ring-blue-500
                  focus:border-blue-500 
                  block 
                  flex-1
                   min-w-0
                    w-full 
                    text-sm
                     border-gray-300 p-2.5 
                      dark:bg-gray-700
                       dark:border-gray-600
                        dark:placeholder-gray-400
                         dark:text-white
                          dark:focus:ring-blue-500
                           dark:focus:border-blue-500"
                placeholder="City Name" autoFocus />
            </div>
          </aside>

          <main className="md:col-span-3 sm:col-span-1">
            ss
          </main>
        </section>
      </div>



    </>
  );
}
