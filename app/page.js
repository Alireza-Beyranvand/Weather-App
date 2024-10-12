

import MainContainer from "@/components/containers/MainContainer";
import SideBarContainer from "@/components/containers/SideBarContainer";
import Comments from "@/components/comments/Comments";

export const metadata = {
  title: "Weather App | Home"
}

export default async function Home() {

  return (
    <>
      <div className="flex flex-col pt-5">
        <section className="grid md:grid-cols-9 sm:grid-cols-1 text-center">
          <aside className="md:col-span-2 sm:col-span-1 row-span-3 mb-8">
            <SideBarContainer />
          </aside>
          <main className="md:col-span-7 sm:col-span-1 md:mr-3 shadow-2xl">
            <MainContainer />
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
